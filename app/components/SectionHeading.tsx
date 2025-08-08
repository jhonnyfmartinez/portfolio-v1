import clsx from 'clsx';
import { IconType } from 'react-icons';

type SectionHeadingProps = {
  icon: IconType;
  centered?: boolean;
};

const SectionHeading = (props: React.PropsWithChildren<SectionHeadingProps>) => {
  const Icon = props.icon;
  return (
    <div className={clsx(['flex items-center gap-6', { 'justify-center': props.centered }])}>
      <h2 className={clsx(['flex items-center gap-4', { 'flex-col': props.centered }])}>
        <Icon className="text-primary" data-testid="section-heading-icon" />
        {props.children}
      </h2>
      {!props.centered && <div className="h-px flex-grow max-w-[315px] opacity-20 bg-text" />}
    </div>
  );
};

export default SectionHeading;
