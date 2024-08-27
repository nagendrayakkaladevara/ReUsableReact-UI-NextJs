"use client";
import React, { useState } from "react";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

export const AnimatedTooltip = ({
  Name,
  designation,
  child,
}: {
  Name: string;
  designation: string;
  child: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      className="relative group inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {child}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 10 } }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{ translateX: translateX, rotate: rotate, whiteSpace: "nowrap" }}
            className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
          >
            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
            <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
            <div className="font-bold text-white relative z-30 text-base">{Name}</div>
            <div className="text-white text-xs">{designation}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
