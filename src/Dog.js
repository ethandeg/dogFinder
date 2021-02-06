import { useParams } from "react-router-dom"
import App from "./App"
const Dog = (props) => {
    const { name } = useParams()
    console.log(name)
    const dog = App.defaultProps.dogs.filter(d => d.name === name)[0]
    console.log(dog)
    return (
        <div className="row">
            <div className="card" style={{ width: 500 }}>
                <img src={dog.src}></img>
                <div className="card-body">
                    <h5 className="card-title">{dog.name} - {dog.age}</h5>
                    <p className="card-text">{dog.facts}</p>
                    <a className="btn btn-primary" href="/dogs">Go back to main page</a>
                </div>

            </div>

        </div>
    )
}

export default Dog