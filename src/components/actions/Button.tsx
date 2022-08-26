import "./Button.css";

interface Props {
  context: "primary" | "secondary";
  action?: () => void;
  children: React.ReactNode;
  width?: string;
  display?: string;
  align?: "left" | "right" | "center";
  margin?: string;
}

export function Button(props: Props) {
  const { context, display, width, align, margin, children } = props;
  const action = props.action ?? (() => {});

  const style = {
    display,
    width,
    align,
    margin,
  };

  return (
    <button className={`button ${context}`} style={style} onClick={action}>
      {children}
    </button>
  );
}
