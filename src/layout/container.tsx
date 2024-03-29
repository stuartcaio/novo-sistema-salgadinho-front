import "../styles/layout/container.sass"

import { useEffect } from "react"
import { Outlet } from "react-router-dom"

import NavBar from "../components/navbar"
import Header from "../components/header"

function Container() {
    const token = localStorage.getItem("token");

    function checkToken() {
        if (!token || token === undefined) {
            window.location.href = "/login";
        }
    }

    useEffect(() => {
        checkToken();
    }, []);

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