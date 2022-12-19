import Title from "../../components/Title";

export default function Detail({ params }) {
  const [movieTitle, movieId] = params || [];

  return (
    <div>
      <Title title={movieTitle} />
      <h4>{movieTitle}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params }}) {
  return {
    props: {
      params
    }
  };
}
