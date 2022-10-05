import { useNavigate } from 'react-router-dom';
import { usePrompt } from '../Blocker';
import '../style/History.scss';

function History() {
  const history = useNavigate();

  const handleGoHome = () => {
    history('/');
  };

  const handleGoBack = () => {
    history(-1);
  };

  // usePrompt('Are you sure?', true);
  
  return (
    <div className="History">
      <button onClick={handleGoBack}>back</button>
      <button onClick={handleGoHome}>home</button>
    </div>
  );
}

export default History;