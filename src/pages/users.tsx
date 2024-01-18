import "../styles/pages/users.sass"

import UserCard from "../components/usercard"
import Paginate from "../components/paginate"
import TitleHeader from "../components/titleheader"
import { useEffect, useState } from "react"
import api from "../config.tsx";

const Users = () => {
    const [users, setUsers] = useState<[]>([]);

    function getUsers(){
        api
        .get("/users")
        .then((response) => {
            console.log(response.data)
        })
        .catch((error) => {
            return console.log(error)
        })
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <section id="users">
            <TitleHeader title="Usuários" titleBTN="Cadastrar" />
            <UserCard />
            <Paginate />
        </section>
    )
}

export default Users