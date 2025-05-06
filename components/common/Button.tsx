import { cn } from '@/libs/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Link } from 'next-view-transitions';
import { PropsWithChildren } from 'react';

const linksVariants = {
  hovered:
    'relative after:rounded-full after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100',
};

const buttonVariants = cva(
  'flex items-center transition w-fit ease-in-out uppercase text-lg font-bold duration-300 active:scale-[97%] justify-center',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:shadow-md',
      },
      size: {
        default: 'h-10 rounded-md px-6 py-4',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  className?: string;
}

const Button = ({
  href,
  children,
  className,
  variant = 'default',
  size = 'default',
}: PropsWithChildren<ButtonProps>) => {
  return (
    <Link
      href={href}
      className={cn([
        buttonVariants({
          variant,
          size,
          className,
        }),
      ])}
    >
      {children}
    </Link>
  );
};

export { Button, buttonVariants, linksVariants };
