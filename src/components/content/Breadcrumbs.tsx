import { TranslatedPaths } from "../../lib/paths";
import "./Breadcrumbs.css";

interface Props {
  path: string;
}

export function Breadcrumbs(props: Props) {
  const { path } = props;

  return (
    <ul className={"breadcrumbs"}>
      {path.split("/").map((part, i) => {
        return (
          part && (
            <li key={i}>
              <a
                href={path
                  .split("/")
                  .slice(0, i + 1)
                  .join("/")}
                className={i === path.split("/").length - 1 ? "active" : ""}
              >
                <strong>{TranslatedPaths[part]}</strong>
              </a>
            </li>
          )
        );
      })}
    </ul>
  );
}
