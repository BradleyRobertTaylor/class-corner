'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

import Icons from './ui/Icons';
import teacherImg from '../../public/teacher-illustration.png';
import familyImg from '../../public/Family Values - Wandering in Nature.png';

type CardProps = {
  text: string;
  image: ReactNode;
};

const Card = ({ text, image }: CardProps) => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href="#"
      className="bg-white flex-1 border-2 border-slate-200 rounded-3xl font-semibold p-4"
    >
      {image}
      <div className="mb-2">{text}</div>
      <Icons icon="arrow" className="aspect-square w-4 mx-auto" />
    </motion.a>
  );
};

const SignUp = () => {
  return (
    <div className="hidden md:block mx-auto max-w-md">
      <h3 className="font-extrabold mb-5">Get started as...</h3>
      <div className="flex gap-4 h-50">
        <Card
          text="Teacher"
          image={<Image src={teacherImg} alt="Image" height={200} />}
        />
        <Card
          text="Parent"
          image={<Image src={familyImg} alt="Image" height={200} />}
        />
      </div>
    </div>
  );
};

SignUp.Card = Card;

export default SignUp;
