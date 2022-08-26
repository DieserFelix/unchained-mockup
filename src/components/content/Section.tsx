import { KeyboardArrowUp } from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import "./Section.css";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export function Section(props: Props) {
  const { title, children } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    const resizeListener = () => {
      const element = ref.current;
      if (element) {
        if (collapsed) {
          const minHeight = Array.from(element.children)[0].clientHeight;
          element.style.height = `${minHeight}px`;
        } else {
          const maxHeight = Array.from(element.children).reduce(
            (previous, current) =>
              previous +
              current.clientHeight +
              parseInt(
                window
                  .getComputedStyle(current)
                  .getPropertyValue("margin-bottom"),
              ) +
              parseInt(
                window.getComputedStyle(current).getPropertyValue("margin-top"),
              ),
            0,
          );
          element.style.height = `${maxHeight}px`;
        }
      }
    };
    resizeListener();
    window.addEventListener("resize", resizeListener);
    window.addEventListener("scroll", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
      window.removeEventListener("scroll", resizeListener);
    };
  }, [collapsed]);

  return (
    <div className={"section"} ref={ref}>
      <h2 id={title} onClick={() => setCollapsed(!collapsed)}>
        <div className={collapsed ? "expandable" : "collapsible"}>
          <KeyboardArrowUp />
        </div>
        {title}
      </h2>
      {children}
    </div>
  );
}
