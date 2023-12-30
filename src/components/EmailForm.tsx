'use client';

import { signIn } from 'next-auth/react';
import Button from './Button';
import Logo from './Logo';
import Divider from './ui/Divider';
import Icons from './ui/Icons';

const EmailForm = () => {
  return (
    <div className="flex flex-col gap-3 items-center w-full max-w-md bg-white p-10 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <Logo />
      <p className="text-xs">Enter your email to sign in to your account</p>
      <form className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <input
            className="w-full rounded-md border-zinc-400"
            type="text"
            placeholder="name@example.com"
          />
          <Button type="submit" text="Sign In with Email" />
        </div>
      </form>
      <Divider text="or continue with" className="my-4" />
      <Button
        onClick={() => signIn('google')}
        className="flex gap-4 items-center justify-center w-full bg-white text-black shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white transition-shadow font-normal"
      >
        <Icons className="w-8" icon="google" />
        Sign in with Google
      </Button>
    </div>
  );
};

export default EmailForm;
