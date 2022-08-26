import { useEffect, useRef } from "react";
import "./Thumbnails.css";
interface Props {
  children: React.ReactNode;
}

export function Thumbnails(props: Props) {
  const ref = useRef<HTMLUListElement>(null);
  const { children } = props;

  useEffect(() => {
    const element = ref.current;
    const mouseDownHandler = (e: MouseEvent) => {
      if (element) {
        const position = {
          left: element.scrollLeft,
          x: e.clientX,
        };
        const mouseMoveHandler = (e: MouseEvent) => {
          const dx = e.clientX - position.x;
          element.scrollLeft = position.left - dx;
        };

        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", (e) => {
          document.removeEventListener("mousemove", mouseMoveHandler);
        });
      }
    };
    document.addEventListener("mousedown", mouseDownHandler);

    return () => {
      document.removeEventListener("mousedown", mouseDownHandler);
    };
  }, []);

  return (
    <ul className={"thumbs"} ref={ref}>
      {children}
    </ul>
  );
}
