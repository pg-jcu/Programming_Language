import { useEffect, useRef } from 'react';
import '../style/Home.scss';

function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'green';
      ctx.fillRect(25, 25, 100, 100);
    }
  });

  return (
    <div className="Home">
      <canvas ref={canvasRef} />
    </div>
  );
}

export default Home;