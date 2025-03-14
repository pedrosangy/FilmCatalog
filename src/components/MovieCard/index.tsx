import { Movie } from "@/types/movie";
import "./index.scss";
import StarRatting from "../StarRatting";
export interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const  movie  = props.movie;
  return (
    <li className="movie-card" key={movie.id}>
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <StarRatting/>
        <div className="hidden-content">{movie.overview}</div>
      </div>
    </li>
  );
}
