import ErrorPage from "../../components/ErrorPage/errorPage";

export default function Error401(){
    return (
        <ErrorPage title="401" description="Você não tem permissão! Para conseguir o acesso, faça o login." color="red" />
    )
}