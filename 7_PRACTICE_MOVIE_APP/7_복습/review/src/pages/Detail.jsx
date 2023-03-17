import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { pathname: movieID } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year&${movieID}`
      )
    ).json();
    setMovie(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  const { state } = useLocation();

  return (
    <>
      <h1>{state?.title || loading ? "Loding..." : "api movie"}</h1>
      <img
        src={state?.img || loading ? "Loding..." : "api movie"}
        alt={state?.title || loading ? "Loding..." : "api movie"}
      />
      <p>{state?.summary || loading ? "Loding..." : "api movie"}</p>
    </>
  );
}
