import "./Hint.css";

interface Props {
  margin?: string;
  children: React.ReactNode;
}

export function Hint(props: Props) {
  const { margin, children } = props;

  return (
    <div className={"hint"} style={{ margin: margin }}>
      {children}
    </div>
  );
}
