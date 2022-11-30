import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';
function Movie({ id, coverImg, year, title, summary, genres }) {
  if (!coverImg) return;
  return (
    <Link to={`/movie/${id}`} className={styles.movie}>
      <img src={coverImg} alt={title}></img>
      <div>
        <h3 className={styles.title}>
          <a>{title}</a>
        </h3>
        <h5 className={styles.year}>{year}</h5>
        <ul className={styles.genres}>
          {genres.map((g) => (
            <li className={styles.genre} key={g}>
              {g}
            </li>
          ))}
        </ul>
        <p className={styles.summary}>
          {summary.length > 236 ? `${summary.slice(0, 235)}...` : summary}
        </p>
      </div>
    </Link>
  );
}

Movie.protypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
