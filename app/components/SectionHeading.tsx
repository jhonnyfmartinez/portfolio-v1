type SectionHeadingProps = {
  icon: (props: { className?: string }) => React.ReactElement;
};

const SectionHeading = (props: React.PropsWithChildren<SectionHeadingProps>) => {
  const Icon = props.icon;
  return (
    <div className="flex items-center gap-6">
      <h3 className="text-headings flex items-center gap-4">
        <Icon className="text-primary" />
        {props.children}
      </h3>
      <div className="h-px flex-grow max-w-[315px] opacity-20 bg-text" />
    </div>
  );
};

export default SectionHeading;
