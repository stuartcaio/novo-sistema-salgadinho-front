import "../styles/pages/users.sass"

import UserCard from "../components/usercard"
import Paginate from "../components/paginate"
import TitleHeader from "../components/titleheader"
import { useEffect, useState } from "react"
import { Pagination } from "../interfaces/pagination"

const Users = () => {
    const [paginationValues, setPaginationValues] = useState<Pagination>({
        quantityPerPage: 50,
        currentPage: 1
    });
    const [termSearch, setTermSearch] = useState<string>("");

    useEffect(() => {
        console.log(paginationValues.currentPage)
    }, [paginationValues.currentPage])

    return (
        <section id="users">
            <TitleHeader title="Usuários" titleBTN="Cadastrar" />
            <UserCard paginationValues={paginationValues} termSearch={termSearch} setTermSearch={setTermSearch} />
            <Paginate paginationValues={paginationValues} setPaginationValues={setPaginationValues} />
        </section>
    )
}

export default Users