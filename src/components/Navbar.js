import logo from "../images/mtjlogo.png"

export default function Navbar() {
    return (
        <nav className = "navbar">
            <img src={logo} alt="MTJ Logo"/>
            <p>my travel journal.</p>
        </nav>
    )
}