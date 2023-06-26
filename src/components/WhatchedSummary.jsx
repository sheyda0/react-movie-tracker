import MovieIcon from '../assets/movie-media-player-svgrepo-com.svg';
import Star from '../assets/star-svgrepo-com.svg';
import Star2 from '../assets/star-svgrepo-com (1).svg';
import Clock from '../assets/clock-svgrepo-com.svg';
import Details from './Details';

const WhatchedSummary = ({ watched }) => {
	const average = (arr) =>
		arr.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);

	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRunTime = average(watched.map((movie) => movie.runtime));

	return (
		<div className="text-white font-semibold px-8 py-4 bg-zinc-700 rounded-md shadow-lg shadow-zinc-900">
			<h3 className="uppercase mb-2">movies you watched</h3>
			<div className="text-zinc-200 text-sm flex justify-between">
				<Details icon={MovieIcon} title={`${watched.length} movies`} />
				<Details icon={Star} title={avgImdbRating.toFixed(1)} />
				<Details icon={Star2} title={avgUserRating.toFixed(1)} />
				<Details icon={Clock} title={avgRunTime.toFixed(1)} />
			</div>
		</div>
	);
};

export default WhatchedSummary;
