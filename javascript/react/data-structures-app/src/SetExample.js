import { useState } from "react";
import { rows } from "./rowsData";

function SetExample() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const onChange = id => {
    const updatedIdToSelected = new Set(selectedIds);

    if (updatedIdToSelected.has(id)) {
      updatedIdToSelected.delete(id);
    } else {
      updatedIdToSelected.add(id);
    }

    setSelectedIds(updatedIdToSelected);
  };

  return (
    <table>
      <thead>
        <tr>
          <th />
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(({ id, name }) => (
          <tr key={id}>
            <td>
              <input
                type="checkbox"
                checked={selectedIds.has(id)}
                onChange={() => onChange(id)}
              />
            </td>
            <td>{id}</td>
            <td>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SetExample;
