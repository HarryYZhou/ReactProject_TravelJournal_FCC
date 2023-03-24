import location from "../images/Location.png"
export default function Card(props) {
    return (
        <div className = "card">
            <img className = "card--img" src="https://source.unsplash.com/WLxQvbMyfas" alt = "Fuji Mountain"/>
            <div className = "card--text">
                <div className = "card--top">
                    <img className = "location-logo" src={location}/>
                    <p className = "card--country">JAPAN</p>
                    <p className = "card--google">View on Google Maps</p>
                </div>
                <h1 className = "card--title">Mount Fuji</h1>
                <h3 className = "card--dates">12 Jan, 2021 - 24 Jan, 2021</h3>
                <p className = "card--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>

            </div>
        </div>
    )
}