import "./Description.css";

interface Props {
  width?: string;
  children: React.ReactNode;
}

export function Description(props: Props) {
  const { width, children } = props;

  return (
    <div className={"description"} style={{ width: width }}>
      {children}
    </div>
  );
}
