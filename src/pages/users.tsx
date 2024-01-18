import "../styles/pages/users.sass"

import UserCard from "../components/usercard"
import Paginate from "../components/paginate"
import TitleHeader from "../components/titleheader"

const Users = () => {
    return (
        <section id="users">
            <header>
                <TitleHeader title="Usuários" titleBTN="Cadastrar" />
            </header>

            <main className="users__list">
                <UserCard />
            </main>

            <footer>
                <Paginate />
            </footer>
        </section>
    )
}

export default Users