import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";

export default function Movie({
  mediumCoverImage,
  name,
  movieId,
  title,
  summary,
  genres,
}) {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate(`/${movieId}`);
  };
  return (
    <div key={movieId} onClick={handleClick}>
      <Link
        to={`${movieId}`}
        state={{ title: title, summary: summary, img: mediumCoverImage }}>
        <img src={mediumCoverImage} alt={name} />
        <p>{title}</p>
        <p>{summary}</p>
        <ul>
          {genres.map((genre, idx) => (
            <li key={idx}>{genre}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  mediumCoverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
