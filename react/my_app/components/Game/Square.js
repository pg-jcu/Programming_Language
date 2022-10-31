import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  const onClick = () => setValue('X');

  return (
    <button 
      className="Square"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;