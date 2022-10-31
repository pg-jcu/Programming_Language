import '../../style/Game/Square.scss';

function Square({ value, onClick }) {
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