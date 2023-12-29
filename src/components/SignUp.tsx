"use client";

import Icons from "./ui/Icons";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type CardProps = {
  text: string;
  iconBackgroundColor: string;
  icon: ReactNode;
};

const Card = ({ text, icon, iconBackgroundColor }: CardProps) => {
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
};

const SignUp = () => {
  return (
    <div className="hidden md:block mx-auto max-w-xl">
      <h3 className="font-extrabold mb-5">Get started as...</h3>
      <div className="flex gap-4 h-50">
        <Card
          text="Teacher"
          iconBackgroundColor="bg-[#33a852]"
          icon={<Icons icon="teacher" className="w-20" />}
        />
        <Card
          iconBackgroundColor="bg-[#ffd943]"
          text="Parent"
          icon={<Icons icon="parent" className="w-16" />}
        />
        <Card
          iconBackgroundColor="bg-[#9afbfe]"
          text="Admin"
          icon={<Icons icon="admin" className="w-16" />}
        />
      </div>
    </div>
  );
};

SignUp.Card = Card;

export default SignUp;
