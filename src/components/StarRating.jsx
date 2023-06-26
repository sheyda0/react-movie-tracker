import { useState } from 'react';
import Star from './Star';

const StarRating = ({ maxRating = 5, rating, setRating }) => {
	const [tempRating, setTempRating] = useState(0);

	const handleRating = (rating) => {
		setRating(rating);
	};

	return (
		<div className="flex items-center gap-4">
			<div className="flex gap-2 py-6">
				{Array.from({ length: maxRating }, (_, i) => (
					<Star
						key={i}
						full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
						onRate={() => handleRating(i + 1)}
						onHoverIn={() => setTempRating(i + 1)}
						onHoverOut={() => setTempRating(0)}
					/>
				))}
			</div>
			<p className="text-yellow-400 font-semibold">
				{tempRating || rating || ''}
			</p>
		</div>
	);
};

export default StarRating;
