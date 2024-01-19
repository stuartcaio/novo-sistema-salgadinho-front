import { FormEvent, useState } from "react"
import "../styles/components/formuser.css"
import { handleInput } from "../functions/inputs/handleInput";
import api from "../config";
import { useNavigate } from "react-router-dom";

export default function FormUser(){
    const [inputsValues, setInputsValues] = useState<IFormUser>({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    function register(e: FormEvent){
        e.preventDefault();
    
        api
        .post("/register", inputsValues)
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
                <h1 className="formUser___title">Registre-se</h1>
                <div className="formUser___inputs">
                    <input type="text" placeholder="Nome" name="name" value={inputsValues?.name} onChange={(e) => handleInput(setInputsValues, e)} />
                    <input type="text" placeholder="E-mail" name="email" value={inputsValues?.email} onChange={(e) => handleInput(setInputsValues, e)} />
                    <input type="text" placeholder="Senha" name="password" value={inputsValues?.password} onChange={(e) => handleInput(setInputsValues, e)} />
                </div>
                <button type="submit" className="formUser___button">Salvar</button>
            </form>
        </div>
    )
}