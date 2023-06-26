const Details = ({ icon, title }) => {
	return (
		<div className="flex items-center">
			<img src={icon} alt="" width={15} />
			<span className="ml-1">{title}</span>
		</div>
	);
};

export default Details;
