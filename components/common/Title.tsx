'use client';

import { cn } from '@/libs/utils';

type Props = {
  children: React.ReactNode;
  lineColor?: string;
  className?: string;
};

export const Title = ({ children, lineColor = '#000', className }: Props) => {
  return (
    <div className="flex gap-8">
      <span
        style={{ backgroundColor: lineColor }}
        className={`text-4xl hidden xl:block font-bold w-8 rounded-full h-[0.20rem] relative top-5`}
      />
      <h2
        className={cn(
          'text-black uppercase text-3xl lg:text-4xl font-light max-w-lg',
          className
        )}
      >
        {children}
      </h2>
    </div>
  );
};
