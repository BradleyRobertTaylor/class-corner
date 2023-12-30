import { cn } from '@/lib/utils';

const Divider = ({ text, className }: { text: string; className?: string }) => {
  return (
    <div className={cn('w-full uppercase flex gap-3 items-center', className)}>
      <div className="bg-zinc-200 h-[1px] grow" />
      <div className="text-xs text-zinc-500">{text}</div>
      <div className="bg-zinc-200 h-[1px] grow" />
    </div>
  );
};

export default Divider;
