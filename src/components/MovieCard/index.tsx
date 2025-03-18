import { Movie } from "@/types/movie"; // Corrected import statement
import "./index.scss";
import StarRatting from "../StarRatting";

export interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const movie = props.movie;
  return (
    <li className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <StarRatting rating={movie.vote_average} />
        <div className="hidden-content">
          <p className="description">
            {movie.overview
              ? movie.overview.length > 100
                ? `${movie.overview.substring(0, 100)}...`
                : movie.overview
              : "Descrição não disponível"}
          </p>

          <button className="btn-default">Ver mais</button>
        </div>
      </div>
    </li>
  );
}
