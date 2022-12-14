import { messages, users } from "./mapData";

function MapExample() {
  const namesById = users.reduce((prev, user) => ({ ...prev, [user.id]: user.name }), {});

  return messages.map(({ id, text, userId }) => (
    <div key={id}>
      <div>{text}</div>
      <div>{namesById[userId]}</div>
    </div>
  ));
}

export default MapExample;
