import styled from "styled-components"

const Main = styled.div`
    background-color: #FFFFFF;
    border: 2px solid #E9ECF1;
    width: 25rem;
    height: 30rem;
    margin: 3rem;
    transform: scale(90%);
    transition: 0.1s;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    
    h2{
        margin: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    p{
        margin: 1rem;
        color: #959595;
        font-weight: bold;
        font-size: 1.5rem;

        @media screen and (max-width: 900px) {
            font-size: 1rem;
}
    }

    h3 {
        color: #71BBFF;
        margin: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
    }

    

    @media screen and (max-width: 900px) {
        width: 15rem;
        height: 20rem;
        transform: scale(100%);
}

    :hover{
        transform: scale(100%);
    }
`

const Imagem = styled.div`
    background-color: #2A2A2A;
    width: 6rem;
    height: 6rem;
    margin: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
        width: 4rem;
        height: 4rem;
    }

    img{
        width: 3rem;
        height: 3rem;
    }
`

export default function ChoseYouSquare(props) {
    return(
        <Main>
            <Imagem>
                <img src={props.imagem} alt="Imagem" />
            </Imagem>
            <h2>{props.texto}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci qui aperiam distinctio mollitia est blanditiis</p>
            <h3>Learn More</h3>
        </Main>
    )
}