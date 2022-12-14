import { messages, users } from "./mapData";

function MapExample2() {
  const namesById = new Map(users.map(({ id, name }) => [id, name]));

  return (
    <>
    {messages.map(({ id, text, userId }) => (
      <div key={id}>
        <div>{text}</div>
        <div>{namesById.get(userId)}</div>
      </div>
    ))}
    </>
  )
}

export default MapExample2;
