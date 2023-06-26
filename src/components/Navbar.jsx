import Logo from './Logo';
import NumResults from './NumResults';
import Search from './Search';

const Navbar = ({ children }) => {
	return (
		<div className="bg-black px-8 py-5 flex justify-between items-center">
			{children}
		</div>
	);
};

export default Navbar;
