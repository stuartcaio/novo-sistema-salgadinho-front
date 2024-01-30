import { Dispatch, SetStateAction } from "react";

type possibleStateValues = string | number | boolean | object | [] | undefined;

export default function changeState(setState: Dispatch<SetStateAction<any>>, stateName: string, value: possibleStateValues){
    setState((prevState: object) => ({...prevState, [stateName]: value}))
}