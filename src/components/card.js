function Card({ cover, title }) {
	return (
		<article>
			<img src={cover} alt=" " />
			<div>
				<p>{title}</p>
			</div>
		</article>
	);
}

export default Card