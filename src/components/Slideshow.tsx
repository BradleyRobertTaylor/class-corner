"use client";

import { useState } from "react";
import { images } from "@/data/photo-gallery-images";
import { AnimatePresence, motion } from "framer-motion";

export default function Slideshow() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <AnimatePresence initial={false}>
      <motion.img
        className="rounded-3xl"
        src={images[imageIndex].src}
        alt=""
        key={images[imageIndex].src}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
    </AnimatePresence>
  );
}
