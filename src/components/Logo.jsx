import LogoIcon from '../assets/popcorn-svgrepo-com (1).svg';

const Logo = () => {
	return (
		<div className="flex items-center">
			<img src={LogoIcon} alt="" width="50" />
			<h3 className="text-white font-bold text-2xl">usePopcorn</h3>
		</div>
	);
};

export default Logo;
