import "./Grid.css";

interface Props {
  children: React.ReactNode;
}

export function Grid(props: Props) {
  const { children } = props;

  return <div className={"grid"}>{children}</div>;
}
