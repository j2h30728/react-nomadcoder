import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <span className={styles.loader}>Loading...⏳</span>
      ) : (
        <div className={styles.container}>
          <img src={movie.medium_cover_image} />
          <div className={styles.textbox}>
            <a href={movie.url} target="_blank">
              {movie.title_long}
            </a>
            <div className={styles.rating}>
              {`⭐ ${movie.rating}`}
              {movie.runtime != 0 ? ` | ${movie.runtime}min` : ''}
            </div>
            <div>{movie.description_intro}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
