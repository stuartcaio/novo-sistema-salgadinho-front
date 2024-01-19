import "../styles/pages/users.sass"

import UserCard from "../components/usercard"
import Paginate from "../components/paginate"
import TitleHeader from "../components/titleheader"

const Users = () => {
    return (
        <section id="users">
            <TitleHeader title="Usuários" titleBTN="Cadastrar" />
            <UserCard />
            <Paginate />
        </section>
    )
}

export default Users