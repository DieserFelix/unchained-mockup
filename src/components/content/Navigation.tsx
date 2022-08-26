import "./Navigation.css";

interface Props {
  sections: string[];
}

export function Navigation(props: Props) {
  const { sections } = props;

  return (
    <ul className="nav">
      {sections.map((section, i) => (
        <li key={i}>
          <a href={`#${section}`}>{section}</a>
        </li>
      ))}
    </ul>
  );
}
