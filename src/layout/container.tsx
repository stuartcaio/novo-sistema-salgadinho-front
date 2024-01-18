import "../styles/layout/container.sass"

import { Outlet } from "react-router-dom"

import NavBar from "../components/navbar"
import Header from "../components/header"

const Container = () => {
    return (
        <section>
            <Header />

            <NavBar />

            <main id="container">
                <Outlet />
            </main>
        </section>
    )
}

export default Container 