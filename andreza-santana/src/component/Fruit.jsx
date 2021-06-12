function Fruit(props) {
    return (
        <div>
            <h3>{props.id} - {props.name}</h3>
            <p>{props.description}</p>
            <img src={props.image} alt="imagem de fruta" style={{"width": "100px"}}></img>
        </div>
    )
}

export default Fruit;