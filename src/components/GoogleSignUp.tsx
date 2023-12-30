import { signInWithGoogle } from '@/actions/signInWithGoogle';
import Button from './Button';
import Icons from './ui/Icons';

const GoogleSignUp = () => {
  return (
    <form className="w-full" action={signInWithGoogle}>
      <Button
        type="submit"
        className="flex gap-4 items-center justify-center w-full bg-white text-black shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white transition-shadow font-normal"
      >
        <Icons className="w-8" icon="google" />
        Sign in with Google
      </Button>
    </form>
  );
};

export default GoogleSignUp;
