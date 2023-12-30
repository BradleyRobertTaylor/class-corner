import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  size?: 'large' | 'default';
  children?: ReactNode;
};

const Button = ({
  className,
  text,
  size = 'default',
  children,
  ...props
}: ButtonProps) => {
  const styles = {
    large: 'rounded-full w-5/6 py-5 text-lg',
    default: 'rounded-3xl py-2',
  };

  return (
    <button
      {...props}
      className={cn(
        'bg-button-purple text-white font-semibold px-4 hover:bg-[#855A94] transition-colors',
        styles[size],
        className,
      )}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
