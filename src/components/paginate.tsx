import { Dispatch, SetStateAction } from "react"
import { Pagination } from "../interfaces/pagination"
import "../styles/components/paginate.sass"
import changeState from "../functions/states/changeState"

interface Props{
    paginationValues: Pagination,
    setPaginationValues: Dispatch<SetStateAction<Pagination>>
}

const Paginate = (props: Props) => {
    return (
        <footer id='paginate'>
            <button onClick={() => changeState(props.setPaginationValues, "currentPage", props.paginationValues.currentPage - 1)}> Pagina Anterior </button>
            <span> {props.paginationValues.currentPage} de 99 </span>
            <button onClick={() => changeState(props.setPaginationValues, "currentPage", props.paginationValues.currentPage + 1)}> Proxima Pagina </button>
        </footer>
    )
}

export default Paginate