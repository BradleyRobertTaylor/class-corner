import Button from "@/components/Button";
import PhotoGallery from "@/components/PhotoGallery";
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <main>
      <section className="text-center pt-40 pb-6 px-6 md:pt-44 md:max-w-2xl lg:max-w-4xl mx-auto">
        <h1 className="font-extrabold text-3xl mb-5 text-slate-700 sm:text-6xl">
          Your teaching ally in the classroom
        </h1>
        <p className="font-bold text-gray-500 text-sm mb-5 sm:text-xl">
          A better app for a better teaching experience. ClassCorner helps you
          simplify daily tasks by giving teachers the tools to succeed and focus
          on what's most important
        </p>
        <div className="text-3xl font-black text-orange-500 mb-14 sm:text-5xl md:mb-6">
          TEACHING!
        </div>
        <Button text="Sign up" size="large" className="md:hidden" />
        <SignUp />
      </section>
      <PhotoGallery />
    </main>
  );
}

// Go beyond the classroom with our teaching resources. ClassCorner is
// here to provide a support system for teachers to help with classroom
// management, organization, and communication.
