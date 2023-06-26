import { useState } from 'react';

const Box = ({ children }) => {
	const [isOpen1, setIsOpen1] = useState(true);

	return (
		<div className="list-box w-1/2 bg-zinc-800 mt-4 overflow-y-auto rounded-lg">
			<div className="flex justify-end">
				<button
					className="bg-zinc-900 m-2 w-6 rounded-full text-white absolute"
					onClick={() => setIsOpen1(!isOpen1)}>
					{isOpen1 ? '-' : '+'}
				</button>
			</div>
			{isOpen1 && [children]}
		</div>
	);
};

export default Box;
