import { ChangeEvent, Dispatch, SetStateAction } from "react";

export function handleInput<T>(setState: Dispatch<SetStateAction<T>>, e: ChangeEvent<HTMLInputElement>): void{
    const { name, value } = e.target;

    setState((prevState) => ({
        ...prevState,
        [name]: value
    }));
}