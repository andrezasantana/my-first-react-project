function Fruit(props) {
    return (
        <div>
            <h3>{props.name} - {props.id}</h3>
            <p>{props.description}</p>
            <img src={props.image} alt="imagem de fruta" style={{"width": "100px"}}></img>
        </div>
    )
}

export default Fruit;