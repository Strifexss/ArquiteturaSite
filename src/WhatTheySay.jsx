import styled from "styled-components"
import Man from "./imgs/BusinessMan.jpg"
const Main = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 3rem;

    @media screen and (max-width: 900px) {
       display: flex;
       justify-content: center;
       align-items: center;
        flex-direction: column;
}
`

const Imagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 30rem;
        height: 30rem;
        margin: 1rem;

        @media screen and (max-width: 900px) {
            width: 22rem;
            height: 25rem;
        }
    }
`

const Textos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;

    @media screen and (max-width: 900px) {
        justify-content: center;
        align-items: center;
}
    h1 {
        font-size: 3rem;
        
        @media screen and (max-width: 900px) {
            text-align: center;
        }
    }

    p {
        font-size: 1.5rem;
        margin-top: 4rem;

        @media screen and (max-width: 900px) {
            text-align: center;
        }
    }

    h2 {
        margin-top: 4rem;
    }
`

export default function WhatTheySay() {
    return(
        <Main>
            <Imagem>
                <img src={Man} alt="BusinessMan" />
            </Imagem>
            <Textos>
                <h1>What our customers say</h1>
                <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere adipisci quidem consectetur. Distinctio facilis facere nulla consectetur, fugiat at perspiciatis aliquid fuga ratione dolore beatae obcaecati fugit magni aliquam id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti eligendi, neque labore, numquam cum inventore ut molestiae maxime provident itaque temporibus esse alias dolorem! Ratione voluptatem quod repudiandae laborum. "</p>
                <h2>Frank Taylon</h2>
            </Textos>
        </Main>
    )
}