export type TabContentProps = {
  position: string;
  company: string;
  period: string;
  items: string[];
  hidden?: boolean;
};

const TabContent = (props: TabContentProps) => (
  <article hidden={props.hidden}>
    <h5 className="text-headings">
      {props.position}
      <span className="text-primary ml-2">@ {props.company}</span>
    </h5>
    <p className="small-copy font-mono">{props.period}</p>
    <ul className="bullet-list mt-6">
      {props.items.map((item, index) => (
        <li key={index} className="body-copy mt-4 first-of-type:mt-0">
          {item}
        </li>
      ))}
    </ul>
  </article>
);

export default TabContent;