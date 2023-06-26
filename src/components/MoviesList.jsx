import { useState } from 'react';
import Movie from './Movie';

const MoviesList = ({ movies, onSelectMovie }) => {
	return (
		<ul>
			{movies?.map((movie) => (
				<Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
			))}
		</ul>
	);
};

export default MoviesList;
