import { useEffect, useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Search from './components/Search';
import NumResults from './components/NumResults';
import MoviesList from './components/MoviesList';
import Box from './components/Box';
import WhatchedSummary from './components/WhatchedSummary';
import WatchedMoviesList from './components/WatchedMoviesList';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import MovieDetails from './components/MovieDetails';
import { useLocalStorageState } from './hooks/useLocalStorageState';
const KEY = 'b2c20b9&s';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [query, setQuery] = useState('');
	const [selectedId, setSelectedId] = useState(null);

	const [watched, setWatched] = useLocalStorageState([], 'watched');

	const handleSelectMovie = (id) => {
		setSelectedId(id === selectedId ? null : id);
	};

	const handleCloseMovie = () => {
		setSelectedId(null);
	};

	const handleAddWatched = (movie) => {
		setWatched((watched) => [...watched, movie]);
	};

	const handleRemoveWatched = (id) => {
		setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
	};

	useEffect(() => {
		const controller = new AbortController();

		const fetchMovies = async () => {
			try {
				setIsLoading(true);
				setError('');
				const res = await fetch(
					`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
					{ signal: controller.signal }
				);
				if (!res.ok)
					throw new Error('Something went wrong with fetching error');
				const data = await res.json();
				if (data.Response === 'False') throw new Error('Movie not found');
				setMovies(data.Search);
				setError('');
			} catch (err) {
				if (err.name !== 'AbortError') {
					setError(err.message);
				}
			} finally {
				setIsLoading(false);
			}
		};

		if (query.length < 3) {
			setMovies([]);
			setError('');
			return;
		}

		handleCloseMovie();
		fetchMovies();

		return function () {
			controller.abort();
		};
	}, [query]);

	return (
		<div className="bg-zinc-900 pb-4">
			<Navbar>
				<Logo />
				<Search query={query} setQuery={setQuery} />
				<NumResults movies={movies} />
			</Navbar>
			<Main>
				<Box>
					{isLoading && <Loader />}
					{!isLoading && !error && (
						<MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
					)}
					{error && <ErrorMessage message={error} />}
				</Box>
				<Box>
					{selectedId ? (
						<MovieDetails
							selectedId={selectedId}
							onCloseMovie={handleCloseMovie}
							onAddWatched={handleAddWatched}
							watched={watched}
						/>
					) : (
						<>
							<WhatchedSummary watched={watched} />
							<WatchedMoviesList
								watched={watched}
								onDeleteWatched={handleRemoveWatched}
							/>
						</>
					)}
				</Box>
			</Main>
		</div>
	);
}

export default App;
