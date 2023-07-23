import Button from "@/components/Button";
import Underline from "@/components/ui/Underline";

export default function Home() {
  return (
    <main>
      <section className="text-center pt-40 px-6">
        <h1 className="font-black text-3xl mb-5 text-gray-700">
          Let's make classroom communication easy
        </h1>
        <p className="font-bold text-gray-500 text-sm mb-14">
          Providing valuable opportunity for Parents and Teachers to discuss
          students academic <Underline>performance and progress.</Underline>
        </p>
        <Button text="Sign up" size="large" />
      </section>
    </main>
  );
}

// Uniting parents and teachers for a{" "}
// <span className="relative">
//   <span>brighter future!</span>
//   <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-300"></span>
// </span>
