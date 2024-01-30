import "../styles/components/usercard.sass"

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import api from "../config";
import { IUser } from "../interfaces/user";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { Pagination } from "../interfaces/pagination";

interface Props{
    paginationValues: Pagination,
    termSearch: string,
    setTermSearch: Dispatch<SetStateAction<string>>
}

export default function UserCard(props: Props) {
    const [users, setUsers] = useState<IUser[]>([]);

    function getUsers() {
        api
        .get(`/users?quantityPerPage=${props.paginationValues.quantityPerPage}&currentPage=${props.paginationValues.currentPage}&termSearch=${props.termSearch}`)
        .then((response) => {
            setUsers(response.data)
        })
        .catch((error) => {
            return console.log(error)
        });
    }

    useEffect(() => {
        getUsers();
    }, [ , props.paginationValues.quantityPerPage, props.paginationValues.currentPage, props.termSearch]);

    return (
        <div id="user-card">
            <section className="user__data">
                {users.map((user, index) => {
                    return (
                        <div key={index}>
                            <p> <span> Nome: </span>{user.name}</p>
                            <p> <span> E-mail: </span>{user.email}</p>
                        </div>
                    )
                })}
            </section>
            <section className="user__actions">
                <span> <FontAwesomeIcon icon={faEye} /> </span>
                <span> <FontAwesomeIcon icon={faPenToSquare} /> </span>
                <span> <FontAwesomeIcon icon={faTrashCan} /> </span>
            </section>
        </div>
    )
}