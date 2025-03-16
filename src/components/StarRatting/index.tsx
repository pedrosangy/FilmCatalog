import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import "./index.scss";

export interface Props {
  rating: number;
}

export default function StarRatting(props: Props) {
  const numStars = Math.round(props.rating / 2);

  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < 5; i++) {
    if (i < numStars) {
      fullStars.push(i);
    } else {
      emptyStars.push(i);
    }
  }

  return (
    <div className="movie-rate">
      {fullStars.map(i =>
        <IoIosStar key={i} />
      )}
      {emptyStars.map(i =>
        <IoIosStarOutline key={i} />
      )}
    </div>
  );
}


// RESOLVER O RATTING