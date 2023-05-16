import clsx from 'clsx';
import Link from 'next/link';
import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

type ButtonProps = {
  className?: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  download?: boolean;
};

const Button = (props: PropsWithChildren<ButtonProps>) => (
  <Link
    className={clsx(['btn btn-primary', props.className])}
    href={props.href}
    target={props.target}
    download={props.download}
    rel="noopener roreferrer">
    {props.children}
  </Link>
);

export default Button;
