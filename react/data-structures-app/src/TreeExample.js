const menuItems = [
  {
    text: "Menu 1",
    children: [
      {
        text: "Menu 1 1",
        href: "#11"
      },
      {
        text: "Menu 1 2",
        href: "#12"
      }
    ]
  },
  {
    text: "Menu 2",
    href: "#2"
  },
  {
    text: "Menu 3",
    children: [
      {
        text: "Menu 3 1",
        children: [
          {
            text: "Menu 3 1 1",
            href: "#311"
          }
        ]
      }
    ]
  }
];

function Menu({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </ul>
  );
}

function MenuItem({ text, href, children }) {
  if (!children) {
    return (
      <li>
        <a href={href}>{text}</a>
      </li>
    );
  }
  
  return (
    <li>
      {text}
      <Menu items={children} />
    </li>
  );
}

function TreeExample() {
  return <Menu items={menuItems} />
}

export default TreeExample;
