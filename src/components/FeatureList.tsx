import "./FeatureList.css";

interface Props {
  features: string[][];
}

export function FeatureList(props: Props) {
  const { features } = props;

  return (
    <ul className={"featureList"}>
      {features.map(([title, description], i) => (
        <li key={i}>
          <strong>{title}</strong>
          <br />
          {description}
        </li>
      ))}
    </ul>
  );
}
