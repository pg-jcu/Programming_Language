import { useCallback, useMemo, useState, useRef } from "react";
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
  const inputEl = useRef(null);

  const onChange = useCallback(event => {
    let value = event.target.value;

    if (!isFinite(value)) return;

    setNumber(value);
  }, []);
  const onInsert = useCallback(() => {
    if (number === '') return;

    if (!number.match(/[^0-9]/g)) {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
    }
    
    setNumber('');
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div className="average">
      <div>
        <b>Average:</b> {avg} <br />
        <input className="averageInput" value={number} onChange={onChange} ref={inputEl}/>
        <button className="averageBtn" onClick={onInsert}>insert</button>
      </div>
      <ul className="averageList">
        {list.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
    </div>
  );
}

export default Average;