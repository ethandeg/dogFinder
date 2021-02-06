import App from "./App"

const Dogs = (props) => {
    // console.log(props.props.props.dogs)
    console.log(App.defaultProps)
    return (
        <div className="row">
            {App.defaultProps.dogs.map(dog => (
                <div className="card" style={{ width: 500 }}>
                    <img src={dog.src}></img>
                    <div className="card-body">
                        <h5 className="card-title">{dog.name} - {dog.age}</h5>
                        <p className="card-text">{dog.facts}</p>
                        <a className="btn btn-primary" href={`/dogs/${dog.name}`}>See {dog.name}</a>
                    </div>

                </div>


            ))}
        </div>
    )
}
export default Dogs