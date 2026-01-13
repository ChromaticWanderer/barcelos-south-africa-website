"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
  staggerDelay = 0.05,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
  staggerDelay?: number;
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      animate(
        ".word-animate",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(staggerDelay),
        }
      );
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, scope, animate, filter, duration, delay, staggerDelay]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} style={{ display: "inline" }}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="word-animate"
              style={{
                opacity: 0,
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}
              {idx < wordsArray.length - 1 ? " " : ""}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className={cn(className)}>
      <div className="leading-snug tracking-wide">
        {renderWords()}
      </div>
    </div>
  );
};
