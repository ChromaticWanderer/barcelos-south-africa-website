"use client";

import * as THREE from "three";
import { useEffect, useRef, useMemo } from "react";
import ThreeGlobe from "three-globe";

export type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

const RING_PROPAGATION_SPEED = 3;
const defaultGlobeConfig: GlobeConfig = {
  pointSize: 1,
  globeColor: "#1d072e",
  showAtmosphere: true,
  atmosphereColor: "#ffffff",
  atmosphereAltitude: 0.1,
  emissive: "#000000",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  polygonColor: "rgba(255,255,255,0.7)",
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 2000,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 0, lng: 0 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

export function World({
  data,
  globeConfig = defaultGlobeConfig,
}: {
  data: Position[];
  globeConfig?: GlobeConfig;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<ThreeGlobe | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const isInitializedRef = useRef(false);

  const config = useMemo(() => ({ ...defaultGlobeConfig, ...globeConfig }), [globeConfig]);

  useEffect(() => {
    if (!containerRef.current || isInitializedRef.current) return;

    const container = containerRef.current;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 300;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      container.clientWidth,
      container.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Initialize globe
    const globe = new ThreeGlobe()
      .globeImageUrl(
        "//unpkg.com/three-globe/example/img/earth-dark.jpg"
      )
      .bumpImageUrl(
        "//unpkg.com/three-globe/example/img/earth-topology.png"
      )
      .showAtmosphere(config.showAtmosphere ?? true)
      .atmosphereColor(config.atmosphereColor ?? "#ffffff")
      .atmosphereAltitude(config.atmosphereAltitude ?? 0.1);

    // Set globe material
    const globeMaterial = globe.globeMaterial() as THREE.MeshPhongMaterial;
    globeMaterial.color = new THREE.Color(config.globeColor);
    globeMaterial.emissive = new THREE.Color(config.emissive);
    globeMaterial.emissiveIntensity = config.emissiveIntensity ?? 0.1;
    globeMaterial.shininess = config.shininess ?? 0.9;

    globeRef.current = globe;
    scene.add(globe);

    // Add lights
    const ambientLight = new THREE.AmbientLight(
      new THREE.Color(config.ambientLight),
      0.6
    );
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(
      new THREE.Color(config.directionalLeftLight),
      0.6
    );
    directionalLight1.position.set(-400, 100, 400);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(
      new THREE.Color(config.directionalTopLight),
      0.6
    );
    directionalLight2.position.set(-200, 500, 200);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(
      new THREE.Color(config.pointLight),
      0.8
    );
    pointLight.position.set(-200, 500, 200);
    scene.add(pointLight);

    // Set initial position
    if (config.initialPosition) {
      globe.rotation.y = (-config.initialPosition.lng * Math.PI) / 180;
      globe.rotation.x = (config.initialPosition.lat * Math.PI) / 180;
    }

    isInitializedRef.current = true;

    // Cleanup
    return () => {
      if (rendererRef.current && container) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [config]);

  // Update arcs when data changes
  useEffect(() => {
    if (!globeRef.current || !isInitializedRef.current) return;

    const globe = globeRef.current;

    // Configure arcs
    globe
      .arcsData(data)
      .arcColor((d: object) => (d as Position).color)
      .arcAltitude((d: object) => (d as Position).arcAlt)
      .arcStroke(0.5)
      .arcDashLength(config.arcLength ?? 0.9)
      .arcDashGap(2)
      .arcDashAnimateTime(config.arcTime ?? 2000);

    // Add ring points at destinations
    const ringData = data.map((d) => ({
      lat: d.endLat,
      lng: d.endLng,
      maxR: (config.maxRings ?? 3) * 2,
      propagationSpeed: RING_PROPAGATION_SPEED,
      repeatPeriod: (config.arcTime ?? 2000) / (config.rings ?? 1),
    }));

    globe
      .ringsData(ringData)
      .ringColor(() => (t: number) => `rgba(255, 100, 50, ${1 - t})`)
      .ringMaxRadius("maxR")
      .ringPropagationSpeed("propagationSpeed")
      .ringRepeatPeriod("repeatPeriod");

  }, [data, config]);

  // Animation loop
  useEffect(() => {
    if (!isInitializedRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (globeRef.current && config.autoRotate) {
        globeRef.current.rotation.y += (config.autoRotateSpeed ?? 0.5) * 0.001;
      }

      rendererRef.current!.render(sceneRef.current!, cameraRef.current!);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [config.autoRotate, config.autoRotateSpeed]);

  // Handle resize
  useEffect(() => {
    if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;

    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      style={{ minHeight: "400px" }}
    />
  );
}

export default World;
