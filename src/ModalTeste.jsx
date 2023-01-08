import styled from "styled-components"
import { useState } from "react"

export default function ModalTeste() {

    let [Modal, setModal] = useState("none")

    const Main = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    video {
        display: ${Modal};
    }

    h1 {
        display: ${Modal};
    }
`

    function OpenModal() {
        if(Modal == "none") {
            setModal("block")
        }
        else {
            setModal("none")
        }
    }

    return(
        <Main>
            <button onClick={OpenModal}>Modal</button>
            <h1>Teste</h1>
            <h1>Teste</h1>
            <h1>Teste</h1>
            <h1>Teste</h1>
            <video width={"320"} height="240" controls>
                <source src="https://res.cloudinary.com/dcdertojs/video/upload/v1673184760/samples/sea-turtle.mp4" type="video/mp4"/>
            </video>
        </Main>
    )
}