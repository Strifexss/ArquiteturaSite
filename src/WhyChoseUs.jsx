import styled from "styled-components"
import ChoseYouSquare from "./components/ChoseYouSquare"
import TagPreco from "./imgs/TagPreço.png"
import WatchIcon from "./imgs/RelogioIcon.png"

const Main = styled.div`
    background-color: #FCFCFD;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    

    h1 {
        margin-top: 4rem;
        font-size: 3rem;
        text-align: center;

        @media screen and (max-width: 900px) {
            font-size: 2rem;
        }
    }
`

const Squares = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
        flex-direction: column;
}
`

export default function WhyChoseUs() {
    return(
        <Main>
            <h1>Why Choose Us?</h1>
            <Squares>
                <ChoseYouSquare imagem={TagPreco} texto="Affordable Price"/>
                <ChoseYouSquare imagem={WatchIcon} texto="Fast Process"/>
                <ChoseYouSquare/>
            </Squares>
        </Main>
    )
}