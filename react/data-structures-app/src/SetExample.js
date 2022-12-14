import { useState } from "react";

const rows = [
  {
    id: "id-1",
    name: "Row 1"
  },
  {
    id: "id-2",
    name: "Row 2"
  },
  {
    id: "id-3",
    name: "Row 3"
  },
  {
    id: "id-4",
    name: "Row 4"
  },
  {
    id: "id-5",
    name: "Row 5"
  },
  {
    id: "id-6",
    name: "Row 6"
  }
];

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
