const ErrorMessage = ({ message }) => {
	return (
		<div className="w-full flex justify-center items-center text-white h-[50vh]">
			{message}
		</div>
	);
};

export default ErrorMessage;
