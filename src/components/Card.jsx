
const Card = ({ name, image, alt, titletext, }) => {
    return (
        <div className="card">
            
            <img src={image} alt={alt} width='150' height="150" />
<h1>{name}</h1>
            <p>{titletext}</p>

        </div>
    )
}

export default Card;
