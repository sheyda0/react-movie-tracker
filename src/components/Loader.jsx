import LoadingGif from '../assets/Dual Ring-1s-200px (1).svg';

const Loader = () => {
	return (
		<div className="w-full h-[80vh] flex justify-center items-center text-white">
			<img src={LoadingGif} width={70} />
		</div>
	);
};

export default Loader;
