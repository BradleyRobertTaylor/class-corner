'use client';

import Button from './Button';
import Logo from './Logo';
import Divider from './ui/Divider';
import GoogleSignUp from './GoogleSignUp';

const LoginForm = () => {
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
      <GoogleSignUp />
    </div>
  );
};

export default LoginForm;
