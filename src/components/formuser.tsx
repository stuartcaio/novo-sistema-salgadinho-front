import "../styles/components/formuser.sass"

import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom";

import api from "../config";

import { IUser } from "../interfaces/user";
import { handleInput } from "../functions/inputs/handleInput";

interface Prop {
    title: string
}

export default function FormUser(props: Prop) {
    const navigate = useNavigate();

    const [inputsValues, setInputsValues] = useState<IUser>({
        name: "",
        email: "",
        password: ""
    });

    const page = window.location.pathname;

    const register = (e: FormEvent) => {
        e.preventDefault();

        api
            .post(page, inputsValues)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div id="formUser">

            <div className="formUser__logo"></div>

            <form className="formUser__form" onSubmit={register}>

                <h1 className="formUser___title">{props.title}</h1>

                <div className="formUser___inputs">

                    {page === "/register" && <input type="text" placeholder="Nome" name="name" value={inputsValues?.name} onChange={(e) => handleInput(setInputsValues, e)} />}

                    <input type="text" placeholder="E-mail" name="email" value={inputsValues?.email} onChange={(e) => handleInput(setInputsValues, e)} />

                    <input type="text" placeholder="Senha" name="password" value={inputsValues?.password} onChange={(e) => handleInput(setInputsValues, e)} />

                </div>

                <button type="submit" className="formUser___button"> Salvar </button>

            </form>

        </div>
    )
}