import "../styles/components/navbar.sass"

import { Link } from "react-router-dom"
import { GrSchedules } from "react-icons/gr"
import { FaHome, FaBuilding, FaUsers } from "react-icons/fa"

const NavBar = () => {
    return (
        <aside id="aside">
            <nav>
                <ul className="aside_list">
                    <li>
                        <Link to='/'> <span> <FaHome /> </span> Home </Link>
                    </li>

                    <li>
                        <Link to='/schedule'> <span> <GrSchedules /> </span> Agenda </Link>
                    </li>

                    <li>
                        <Link to='/users'> <span> <FaUsers /> </span> Usuários </Link>
                    </li>

                    <li>
                        <Link to='/companies'> <span> <FaBuilding /> </span> Empresas </Link>
                    </li>

                    <li>
                        <Link to='/employees'> <span> <FaUsers /> </span> Funcionários </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default NavBar