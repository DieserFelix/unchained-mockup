import { useEffect, useRef } from "react";
import "./Container.css";

interface Props {
  setWidth: (width: number) => void;
  children: React.ReactNode;
}

export function Container(props: Props) {
  const { setWidth, children } = props;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const resizeListener = () => {
      const element = ref.current;
      if (element) {
        setWidth(element.clientWidth);
      }
    };
    resizeListener();
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [setWidth]);

  return (
    <div className={"container"} ref={ref}>
      {children}
    </div>
  );
}
