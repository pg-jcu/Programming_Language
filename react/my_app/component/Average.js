import { useMemo, useState } from "react";
import '../style/Average.css';

const getAverage = numbers => {
  console.log('calculating...');

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);

  return sum / numbers.length;
}

function Average() {
  const [list , setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = event => {
    setNumber(event.target.value);
  };
  const onInsert = () => {
    if (isFinite(number)) {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
    }
    
    setNumber('');
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div className="average">
      <div>
        <input className="averageInput" value={number} onChange={onChange} />
        <button className="averageBtn" onClick={onInsert}>insert</button>
      </div>
      <ul>
        {list.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
      <div>
        <b>Average:</b> {avg}
      </div>
    </div>
  );
}

export default Average;