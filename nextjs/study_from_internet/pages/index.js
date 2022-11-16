import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`/api/movies`)).json();
      setMovies(results);
    })();

    let tmp = 0;
    for (let i = 0; i < 1e9; i++) {
      tmp++;
    }
    console.log('done');
  }, []);
  return (
    <div className="container">
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <Link
          href={{
            pathname: `/movies/${movie.id}`,
            query: {
              title: movie.original_title
            }
          }}
          as={`/movies/${movie.id}`}
          key={movie.id}
        >
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
