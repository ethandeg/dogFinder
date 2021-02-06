import App from "./App"
const Dogs = (props) => {
    // console.log(props.props.props.dogs)
    console.log(App.defaultProps)
    return (
        <>
            {App.defaultProps.dogs.map(dog => (
                <ul>
                    <li>{dog.name}</li>
                    <li>{dog.age}</li>
                    <li>{dog.src}</li>
                    <li>{dog.facts}</li>
                </ul>
            ))}
        </>
    )
}
export default Dogs