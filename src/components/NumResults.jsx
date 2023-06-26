const NumResults = ({ movies }) => {
	return (
		<p className="text-white text-lg">
			Found <strong>{movies.length}</strong> results
		</p>
	);
};

export default NumResults;
