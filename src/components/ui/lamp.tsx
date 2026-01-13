"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface LampContainerProps {
  children: React.ReactNode
  className?: string
}

export function LampContainer({ children, className }: LampContainerProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden bg-charcoal w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left gradient beam */}
        <motion.div
          initial={{ opacity: 0, width: "0rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1.2,
            ease: "easeOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-barcelos-red via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-charcoal h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-charcoal bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right gradient beam */}
        <motion.div
          initial={{ opacity: 0, width: "0rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.2,
            duration: 1.2,
            ease: "easeOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-flame-orange text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-charcoal bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-charcoal h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Center glow effects */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-charcoal blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-barcelos-red blur-3xl"
        ></motion.div>

        {/* Animated center lamp */}
        <motion.div
          initial={{ width: "0rem", opacity: 0 }}
          whileInView={{ width: "16rem", opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: "easeOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-flame-yellow blur-2xl"
        ></motion.div>

        {/* Top lamp bar */}
        <motion.div
          initial={{ width: "0rem", opacity: 0 }}
          whileInView={{ width: "30rem", opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            delay: 0.1,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-flame-yellow"
        ></motion.div>

        {/* Top gradient fade */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-charcoal"></div>
      </div>

      {/* Content area */}
      <div className="relative z-50 flex -translate-y-20 flex-col items-center px-5">
        {children}
      </div>
    </div>
  )
}
