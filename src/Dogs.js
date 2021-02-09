import App from "./App"

const Dogs = (props) => {
    // console.log(props.props.props.dogs)
    console.log(props)
    return (
        <div className="row">
            {props.dogs.map(dog => (
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

Dogs.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.ngsversion.1546554600360.adapt.1900.1.jpg",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2019/02/dog-451643.jpg?h=bf654dbc&itok=MQGvBmuo",
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg",
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }
export default Dogs