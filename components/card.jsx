import '../app.css'

function Card(props){
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.description}</p>
            <img src={props.coverimage} />
            <p>{props.avaliable}</p>
        </div>
    )
}

export default Card