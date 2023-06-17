import clsx from 'clsx';
import Link from 'next/link';
import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

type ButtonColor = 'primary';

type ButtonProps = {
  className?: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  download?: boolean;
  color?: ButtonColor;
};

const buttonColors = {
  primary: 'border-[2px] border-solid border-primary rounded-lg',
};

const Button = ({ color = 'primary', ...props }: PropsWithChildren<ButtonProps>) => {
  const colorClassName = buttonColors[color];
  return (
    <Link
      className={clsx([
        'w-fit flex items-center gap-2.5 px-8 py-[18px]',
        colorClassName,
        props.className,
      ])}
      href={props.href}
      target={props.target}
      download={props.download}
      rel="noopener noreferrer">
      {props.children}
    </Link>
  );
};

export default Button;
