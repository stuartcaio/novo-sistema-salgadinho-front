import { FormEvent, useState } from "react"
import "../styles/components/formuser.css"
import { handleInput } from "../functions/inputs/handleInput";
import api from "../config";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/user";

interface Prop{
    title: string
}

export default function FormUser(props: Prop){
    const [inputsValues, setInputsValues] = useState<IUser>({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const page = window.location.pathname;

    function register(e: FormEvent){
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
                    {page === "/register" &&
                        <input type="text" placeholder="Nome" name="name" value={inputsValues?.name} onChange={(e) => handleInput(setInputsValues, e)} />
                    }
                    <input type="text" placeholder="E-mail" name="email" value={inputsValues?.email} onChange={(e) => handleInput(setInputsValues, e)} />
                    <input type="text" placeholder="Senha" name="password" value={inputsValues?.password} onChange={(e) => handleInput(setInputsValues, e)} />
                </div>
                <button type="submit" className="formUser___button">Salvar</button>
            </form>
        </div>
    )
}