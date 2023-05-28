import clsx from 'clsx';

type SectionHeadingProps = {
  icon: (props: { className?: string }) => React.ReactElement;
  centered?: boolean;
};

const SectionHeading = (props: React.PropsWithChildren<SectionHeadingProps>) => {
  const Icon = props.icon;
  return (
    <div className={clsx(['flex items-center gap-6', { 'justify-center': props.centered }])}>
      <h3
        className={clsx(['text-headings flex items-center gap-4', { 'flex-col': props.centered }])}>
        <Icon className="text-primary" data-testid="section-heading-icon" />
        {props.children}
      </h3>
      {!props.centered && <div className="h-px flex-grow max-w-[315px] opacity-20 bg-text" />}
    </div>
  );
};

export default SectionHeading;
