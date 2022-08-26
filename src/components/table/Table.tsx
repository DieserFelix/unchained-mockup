import "./Table.css";

interface Props {
  title: string;
  columns: number;
  entries: { name: string; value: string }[];
}
export function Table(props: Props) {
  const { title, columns, entries } = props;

  return (
    <div className={"tableContainer"}>
      <table>
        <thead>
          <tr>
            <th colSpan={columns}>{title}</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(({ name, value }, i) => (
            <tr key={i}>
              <td>{name}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
