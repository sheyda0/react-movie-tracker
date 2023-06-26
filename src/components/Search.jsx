import { BiSearch } from 'react-icons/bi';

const Search = ({ query, setQuery }) => {
	return (
		<div className="relative">
			<BiSearch color="white" size={25} className="absolute left-2 top-3" />
			<input
				type="text"
				className="px-4 py-3 w-[25rem] bg-zinc-700 rounded-3xl border-none outline-none text-zinc-300 pl-10"
				placeholder="Search movies..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
		</div>
	);
};

export default Search;
