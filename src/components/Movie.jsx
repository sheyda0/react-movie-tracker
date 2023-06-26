import Calendar from '../assets/calendar-svgrepo-com.svg';

const Movie = ({ movie, onSelectMovie }) => {
	return (
		<div
			className="flex pl-8 py-4 hover:bg-zinc-700 transition cursor-pointer"
			onClick={() => onSelectMovie(movie.imdbID)}>
			<img
				src={movie.Poster}
				alt={`${movie.Title} poster`}
				className="w-[3rem] rounded-sm mr-4"
			/>
			<div>
				<h4 className="text-white font-semibold">{movie.Title}</h4>
				<div className="text-zinc-200 text-sm mt-4 flex items-center">
					<img src={Calendar} alt="" width={15} />
					<p className="ml-1">{movie.Year}</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
