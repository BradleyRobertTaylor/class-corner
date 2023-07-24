"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Icons from "./Icons";
import { ReactNode } from "react";

interface CardProps {
  text: string;
  iconBackgroundColor: string;
  icon: ReactNode;
}

export default function Card({ text, icon, iconBackgroundColor }: CardProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      href="#"
      className="flex-1 border-2 border-slate-200 rounded-3xl font-semibold p-4"
    >
      <div
        className={`${iconBackgroundColor} aspect-square w-24 mx-auto rounded-full mb-2 flex justify-center overflow-hidden`}
      >
        {icon}
      </div>
      <div className="mb-4">{text}</div>
      <Icons icon="arrow" className="aspect-square w-3 mx-auto" />
    </motion.a>
  );
}
