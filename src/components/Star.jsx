import StarIcon from '../assets/star-favorite-svgrepo-com.svg';
import EmptyStarIcon from '../assets/star-svgrepo-com (4).svg';

const Star = ({ onRate, full, onHoverIn, onHoverOut }) => {
	return (
		<span
			role="button"
			onClick={onRate}
			onMouseEnter={onHoverIn}
			onMouseLeave={onHoverOut}>
			{full ? (
				<img src={StarIcon} alt="" width={25} />
			) : (
				<img src={EmptyStarIcon} alt="" width={25} />
			)}
		</span>
	);
};

export default Star;
