import "../styles/components/header.sass"

import { Link } from "react-router-dom"
import { FaDoorOpen } from "react-icons/fa6"

import logo from "/images/logo.png"

const Header = () => {
    return (
        <header id="header">

            <section>
                <img src={logo} alt="logo" />
                <p> Sistema de Salgadinho </p>
            </section>

            <section>
                <Link to='/login'> <FaDoorOpen /> </Link>
            </section>

        </header>
    )
}

export default Header