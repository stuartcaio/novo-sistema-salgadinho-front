import { useState } from "react"
import "../styles/components/formuser.css"
import { handleInput } from "../functions/inputs/handleInput";

export default function FormUser(){
    const [inputsValues, setInputsValues] = useState<IFormUser>();

    return (
        <div id="formUser">
            <div className="formUser__logo"></div>
            <form className="formUser__form">
                <h1></h1>
                <input type="text" placeholder="Nome" name="name" value={inputsValues?.name} onChange={(e) => handleInput(setInputsValues, e)} />
                <input type="text" placeholder="E-mail" name="email" value={inputsValues?.email} onChange={(e) => handleInput(setInputsValues, e)} />
                <input type="text" placeholder="Senha" name="password" value={inputsValues?.password} onChange={(e) => handleInput(setInputsValues, e)} />
                <button type="button"></button>
            </form>
        </div>
    )
}