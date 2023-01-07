import styled from "styled-components"
import PredioTorto from "./imgs/PredioTorto.jpg.webp"

const Main = styled.div`
margin-top: 4rem;
display: grid;
grid-template-columns: 50% 50%;

@media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 5rem;
        text-align: center;

        @media screen and (max-width: 900px) {
            font-size: 2.8rem;
    }
}
    
`

const Teste = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 4rem;

    @media screen and (max-width: 900px) {
        padding-left: 1rem;
}
`

const Gridar = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;


`

const Achivements = styled.div`
    margin: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p{
        color: #727579;
        font-size: 2rem;

        @media screen and (max-width: 900px) {
            font-size: 1rem;
    }
        
    }

    h1{
        font-size: 2rem;
    }
`

const ImagemMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 30rem;
        height: 45rem;

        @media screen and (max-width: 900px) {
            width: 20rem;
            height: 35rem;
            margin-bottom: 3rem;
        }
    }
`

export default function Landing() {
    return(
        <Main>
            <Texts>
                <h1>Let's build your Minimalist & Modern Architecture</h1>
                <Teste>
                <Gridar>
                    <Achivements>
                    <h1>386+</h1>
                    <p>Satisfed Clients Around the World</p>
                    </Achivements>
                    <Achivements>
                    <h1>450</h1>
                    <p>Projects Completed Before Deadline</p>
                    </Achivements>
                    <Achivements>
                    <h1>50</h1>
                    <p>Satisfed Clients Around the World</p>
                    </Achivements>
                    <Achivements>
                    <h1>76</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                    </Achivements>
                </Gridar>
                </Teste>
            </Texts>
            <ImagemMain>
                <img src={PredioTorto} alt="Predio Torto" />
            </ImagemMain>
        </Main>
    )
}