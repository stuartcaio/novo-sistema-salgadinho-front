import "../styles/components/usercard.sass"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"

const UserCard = () => {
    return (
        <div id="user-card">

            <section className="user__data">
                <p> <span> Nome: </span> Diogo Dognini Corrêa </p>
                <p> <span> E-mail: </span> diogo.correia@gruppe.com.br </p>
            </section>

            <section className="user__actions">
                <span> <FontAwesomeIcon icon={faEye} /> </span>

                <span> <FontAwesomeIcon icon={faPenToSquare} /> </span>

                <span> <FontAwesomeIcon icon={faTrashCan} /> </span>
            </section>

        </div>
    )
}

export default UserCard