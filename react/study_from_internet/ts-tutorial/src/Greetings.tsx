import "./styles/Greetings.css";

interface GreetingsProps {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
}

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div className="Greetings">
      Hello, {name}{mark}
      {optional && <p>{optional}</p>}
      <p>
        <button onClick={handleClick}>click</button>
      </p>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
