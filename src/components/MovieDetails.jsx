import { useEffect } from 'react';
import { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import StarIcon from '../assets/star-svgrepo-com (1).svg';
import imdbStar from '../assets/star-svgrepo-com.svg';
import StarRating from './StarRating';
import Loader from './Loader';
const KEY = 'b2c20b9&s';

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
	const [movie, setMovie] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [rating, setRating] = useState(0);

	const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
	const watchedUserRating = watched.find(
		(movie) => movie.imdbID === selectedId
	)?.userRating;

	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre
	} = movie;

	const handleAdd = () => {
		const newWatchedMovie = {
			imdbID: selectedId,
			title,
			year,
			poster,
			imdbRating: Number(imdbRating),
			runtime: Number(runtime.split(' ').at(0)),
			userRating: Number(rating)
		};
		onAddWatched(newWatchedMovie);
		onCloseMovie();
	};

	useEffect(() => {
		const callBack = (e) => {
			if (e.code === 'Escape') {
				onCloseMovie();
				console.log('CLOSING');
			}
		};

		document.addEventListener('keydown', callBack);

		return function () {
			document.removeEventListener('keydown', callBack);
		};
	}, [onCloseMovie]);

	useEffect(() => {
		const getMovieDetails = async () => {
			setIsLoading(true);
			const res = await fetch(
				`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
			);
			const data = await res.json();
			setMovie(data);
			setIsLoading(false);
		};
		getMovieDetails();
	}, [selectedId]);

	useEffect(() => {
		if (!title) return;
		document.title = `Movie | ${title}`;

		return function () {
			document.title = 'usePopcorn';
		};
	});

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<button
						className="bg-white m-2 w-6 h-6 rounded-full absolute flex justify-center items-center shadow-md"
						onClick={onCloseMovie}>
						<BsArrowLeftShort size={30} color="black" />
					</button>
					<div>
						<header className="flex bg-zinc-700 text-white gap-8">
							<img src={poster} alt={title} className="w-1/3" />
							<div className="flex flex-col text-base gap-4 py-4 text-zinc-100">
								<h2 className="font-bold text-2xl text-white mb-4">{title}</h2>
								<p>
									{released} &bull; {runtime}
								</p>
								<p>{genre}</p>
								<div className="flex items-center gap-1">
									<span>
										<img src={imdbStar} alt="" width={20} />
									</span>
									<p>{imdbRating} IMDB rating</p>
								</div>
							</div>
						</header>
						<div className="text-white px-8 flex flex-col gap-4">
							<div className="mt-10 bg-zinc-700 rounded-md px-8 py-4">
								{!isWatched ? (
									<>
										<StarRating
											maxRating={10}
											rating={rating}
											setRating={setRating}
										/>
										{rating > 0 && (
											<button
												className="bg-zinc-700 hover:bg-zinc-600 hover:text-white transition  border border-white font-bold rounded-full py-2 w-full"
												onClick={handleAdd}>
												+ Add to list
											</button>
										)}
									</>
								) : (
									<div className="flex gap-1 items-center">
										<span>You rated this movie {watchedUserRating}</span>
										<span>
											<img src={StarIcon} alt="" width={18} />
										</span>
									</div>
								)}
							</div>
							<p>
								<em>{plot}</em>
							</p>
							<p>{actors}</p>
							<p>Directed by {director}</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default MovieDetails;
