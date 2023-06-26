import Details from './Details';
import Star from '../assets/star-svgrepo-com.svg';
import Star2 from '../assets/star-svgrepo-com (1).svg';
import Clock from '../assets/clock-svgrepo-com.svg';
import removeIcon from '../assets/remove-svgrepo-com.svg';

const WatchedMovies = ({ movie, onDeleteWatched }) => {
	return (
		<div className="flex justify-between items-center pr-8">
			<div className="flex pl-8 py-4">
				<img
					src={movie.poster}
					alt={`${movie.title} poster`}
					className="w-[3rem] rounded-sm mr-4"
				/>
				<div>
					<h4 className="text-white font-semibold mb-4">{movie.title}</h4>
					<div className="text-zinc-200 text-sm flex gap-10">
						<Details icon={Star} title={movie.imdbRating} />
						<Details icon={Star2} title={movie.userRating} />
						<Details icon={Clock} title={movie.runtime} />
					</div>
				</div>
			</div>
			<button onClick={() => onDeleteWatched(movie.imdbID)}>
				<img src={removeIcon} alt="" width={19} />
			</button>
		</div>
	);
};

export default WatchedMovies;
