function ProjectCard({ cover, title }) {
	return (
		<article>
			<img src={cover} alt="prestation" />
			<div>
				<p>{title}</p>
			</div>
		</article>
	);
}

export default ProjectCard