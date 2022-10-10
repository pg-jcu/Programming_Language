import { useNavigate } from 'react-router-dom';
import '../style/History.scss';

function History() {
  const history = useNavigate();

  const handleGoHome = () => {
    history('/');
  };

  const handleGoBack = () => {
    history(-1);
  };
  
  return (
    <div className="History">
      <button onClick={handleGoBack}>back</button>
      <button onClick={handleGoHome}>home</button>
    </div>
  );
}

export default History;