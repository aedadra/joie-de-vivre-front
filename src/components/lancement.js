
function Lancement ({image, text, ornement1, title, description, description2, description3, promotion, ornement2}) {
    

    return (
        <article>
            <img src={image} alt=" " />  
            <p>{text}</p>
            <img src={ornement1} alt="ornement de texte" />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{description2}</p>
            <p>{description3}</p>
            <img src={promotion} alt="promption en cours" />
            <img src={ornement2} alt="ornement de texte" />
        </article>
    );

}

export default Lancement