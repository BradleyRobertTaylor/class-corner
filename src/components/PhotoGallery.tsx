"use client";

import { images } from "@/data/photo-gallery-images";
import Image from "next/image";

export default function PhotoGallery() {
  return (
    <section>
      {images.map((src, idx) => {
        return <Image key={idx} src={src} alt="" />;
      })}
    </section>
  );
}
