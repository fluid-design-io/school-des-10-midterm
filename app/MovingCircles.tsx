"use client";

import React from "react";
import { Circles } from "./Circles";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function MovingCircles() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.9], [0, -100]);
  const ySpring = useSpring(y, { stiffness: 400, damping: 90 });
  const sclale = useTransform(scrollYProgress, [0, 0.9], [1, 1.3]);
  const sclaleSpring = useSpring(sclale, { stiffness: 400, damping: 90 });
  return (
    <div className='fixed pointer-events-none h-screen inset-0 w-full max-w-full overflow-hidden'>
      <motion.div style={{ y: ySpring, scale: sclaleSpring }}>
        <Circles className='stroke-gray-100/40 dark:stroke-gray-800/30 fill-none md:w-[150vh] w-[100vh] md:h-[150vh] h-[100vh] translate-x-[25vw] translate-y-[24vh]' />
      </motion.div>
    </div>
  );
}

export default MovingCircles;
