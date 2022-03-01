import { Link } from "react-router-dom";

const Navigation = () => {
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/ala">Ala</Link>
            </li>
            <li>
                <Link to="/bala">Bala</Link>
            </li>
            <li>
                <Link to="/portocala">Portocala</Link>
            </li>
        </ul>
    </nav>
}

export default Navigation;