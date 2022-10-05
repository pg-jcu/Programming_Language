import { useEffect, useRef } from 'react';
import qs from 'qs';
import '../style/Home.scss';
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const canvasRef = useRef(null);
  const location = useLocation();
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 300, 150);

      if (query.id === 'triangle') {
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.moveTo(25, 75);
        ctx.lineTo(125, 75);
        ctx.lineTo(75, 5);
        ctx.fill();
      } else if (query.id === 'circle') {
        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.stroke();
      } else {
        ctx.fillStyle = 'green';
        ctx.fillRect(25, 25, 100, 100);
      }  
    }
  });

  return (
    <div className="Home">
      <ul>
        <li>
          <Link to='?id=triangle'>triangle</Link>
        </li>
        <li>
          <Link to='?id=circle'>circle</Link>
        </li>
      </ul>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Home;