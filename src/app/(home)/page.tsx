import Button from "@/components/Button";
import SignUp from "@/components/SignUp";
import src from "../../../public/pexels-max-fischer-5212703.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-screen text-center pt-40 pb-6 px-6 md:pt-44 md:max-w-2xl lg:max-w-4xl mx-auto">
        <h1 className="font-extrabold text-3xl mb-5 text-slate-700 sm:text-6xl">
          Your ally in the classroom
        </h1>
        <p className="font-bold text-gray-500 text-sm mb-5 sm:text-xl">
          A better app for a better teaching experience. ClassCorner helps you
          simplify daily tasks by giving educators the tools to succeed and
          focus on what&apos;s most important
        </p>
        <div className="text-3xl font-black text-orange-500 mb-14 sm:text-5xl md:mb-6">
          TEACHING!
        </div>
        <Button text="Sign up" size="large" className="md:hidden" />
        <SignUp />
      </section>
      <section className="p-4 md:flex md:items-center md:gap-8 md:p-8 lg:items-start lg:px-16">
        <div className="relative">
          <Image className="rounded-3xl" src={src} alt="Image" />;
        </div>
        <div>
          <h2 className="text-center py-4 text-2xl font-bold border-b-2 border-orange-500 md:pt-0 md:text-4xl">
            What is <span className="text-4xl md:text-6xl">C</span>lass
            <span className="text-4xl md:text-6xl">C</span>orner?
          </h2>
          <p className="my-6 text-slate-700 md:text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            beatae laudantium dolor animi, a unde ratione earum necessitatibus?
            Neque inventore dignissimos temporibus provident impedit totam nam
            aliquid beatae reprehenderit natus.
          </p>
          <p className="text-slate-700 md:text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            beatae laudantium dolor animi, a unde ratione earum necessitatibus?
            Neque inventore dignissimos temporibus provident impedit totam nam
            aliquid beatae reprehenderit natus.
          </p>
        </div>
      </section>
    </main>
  );
}
