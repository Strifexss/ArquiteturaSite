import styled from "styled-components"
import Phone from "../imgs/Phone.png"

const Main = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 900px) {
        flex-direction: column;
}

    h1{ 
        margin: 1rem;
        cursor: pointer;

    }


    button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: 8rem;
        height: 2.5rem;
        border-radius: 1rem;
        background-color: #0C7EE7;
        color: #fff;
        font-weight: bold;
        transition: 0.1s;
        margin-right: 2rem;

        @media screen and (max-width: 900px) {
            margin-right: 0;
    }

        img {
            width: 1.5rem;
            height: 1.5rem;
        }

        :hover {
            background-color: #083157;
        }
    }
`

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        cursor: pointer;
        margin: 1rem;
        transition: 0.1s;
        :hover{
            color: #929191;
        }
    }
`

export default function Cabecalho() {
    return(
        <Main>
            <h1>Arc Mage</h1>
            <Links>
                <p>Home</p>
                <p>Services</p>
                <p>Our Works</p>
                <p>About</p>
            </Links>
            <button> <img src={Phone} alt="Phone" /> Contact</button>
        </Main>
    )
}