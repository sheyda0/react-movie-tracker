import WatchedMovies from './WatchedMovies';

const WatchedMoviesList = ({ watched, onDeleteWatched }) => {
	return (
		<ul>
			{watched?.map((movie) => (
				<WatchedMovies
					movie={movie}
					key={movie.id}
					onDeleteWatched={onDeleteWatched}
				/>
			))}
		</ul>
	);
};

export default WatchedMoviesList;
