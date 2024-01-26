import "../styles/components/button.sass"

const Button = ({ children, onclick }: { children: string, onclick: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button id="button" onClick={onclick}> {children} </button>
    )
}

export default Button