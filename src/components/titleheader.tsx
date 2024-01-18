import "../styles/components/titleheader.sass"

import Button from "./button"

interface TitleHeaderProps {
    title: string
    titleBTN: string
}

const TitleHeader = ({ title, titleBTN }: TitleHeaderProps) => {
    return (
        <header id="title_header">
            <h1> {title} </h1>

            <Button children={titleBTN} />
        </header>
    )
}

export default TitleHeader