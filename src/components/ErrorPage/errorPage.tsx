import "./errorPage.css";

interface Props{
    title: string,
    description: string,
    color: string
}

export default function ErrorPage(props: Props){
    return (
        <main className="error-page">
            <section className="error-page__card">
                <h1 className="error-page___title" style={{color: props.color}}>Erro {props.title}</h1>
                <p className="error-page___paragraph">{props.description}</p>
                <a href="/login" className="error-page___button"><button type="button" style={{backgroundColor: props.color}}>Voltar para a página de login</button></a>
            </section>
        </main>
    )
}