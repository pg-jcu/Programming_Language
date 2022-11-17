import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../../styles/Practice/WithRouterSample.scss';

function WithRouterSample() {
  const location = useLocation(); 
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="WithRouterSample">
      <hr />
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>params</h4>
      <textarea
        value={JSON.stringify(params, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}

export default WithRouterSample;