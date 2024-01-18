import "../styles/components/button.sass"

interface ButtonProps {
    children: string
    onclick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onclick }: ButtonProps) => {
    return (
        <button id="button" onClick={onclick}> {children} </button>
    )
}

export default Button