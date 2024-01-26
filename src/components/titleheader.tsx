import "../styles/components/titleheader.sass"

import Button from "./button"

const TitleHeader = ({ title, titleBTN }: { title: string, titleBTN: string }) => {
    return (
        <header id="title_header">

            <h1> {title} </h1>

            <Button children={titleBTN} />

        </header>
    )
}

export default TitleHeader