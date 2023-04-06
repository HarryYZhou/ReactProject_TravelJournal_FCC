import location from "../images/Location.png"
export default function Card(props) {
    return (
        <div className = "card">
            <img className = "card--img" src={props.item.img} alt = "Fuji Mountain"/>
            <div className = "card--text">
                <div className = "card--top">
                    <img className = "location-logo" src={location}/>
                    <p className = "card--country">{props.item.country}</p>
                    <p className = "card--google">View on Google Maps</p>
                </div>
                <h1 className = "card--title">{props.item.location}</h1>
                <h3 className = "card--dates">{props.item.dates}</h3>
                <p className = "card--description">{props.item.description}</p>

            </div>
        </div>
    )
}