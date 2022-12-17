const menuItems = [
  {
    id: "1",
    text: "Menu 1",
    children: ["11", "12"],
    isRoot: true
  },
  {
    id: "11",
    text: "Menu 1 1",
    href: "#11"
  },
  {
    id: "12",
    text: "Menu 1 2",
    href: "#12"
  },
  {
    id: "2",
    text: "Menu 2",
    href: "#2",
    isRoot: true
  },
  {
    id: "3",
    text: "Menu 3",
    children: ["31"],
    isRoot: true
  },
  {
    id: "31",
    text: "Menu 3 1",
    children: ["311"]
  },
  {
    id: "311",
    text: "Menu 3 1 1",
    href: "#311"
  }
];

function Menu({ itemIds, itemsById }) {
  return(
    <ul>
      {itemIds.map((id) => (
        <MenuItem key={id} itemId={id} itemsById={itemsById} />
      ))}
    </ul>
  );
}

function MenuItem({ itemId, itemsById }) {
  const item = itemsById[itemId];

  if (!item.children) {
    return (
      <li>
        <a href={item.href}>{item.text}</a>
      </li>
    );
  }

  return (
    <li>
      {item.text}
      <Menu itemIds={item.children} itemsById={itemsById} />
    </li>
  );
}

function TreeExample2() {
  const itemsById = menuItems.reduce((prev, item) => ({ ...prev, [item.id]: item }), {});
  const rootIds = menuItems.filter(({ isRoot }) => isRoot).map(({ id }) => id);

  return <Menu itemIds={rootIds} itemsById={itemsById} />;
}

export default TreeExample2;
