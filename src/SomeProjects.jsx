import styled from "styled-components"
import ChinaZun from "./imgs/ChinaZun.jpg"
import Laplaza from "./imgs/Laplaza.jpg"
import { useState } from "react"

const Main = styled.div`
     background-color: #FCFCFD;
     color: black;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
    
     @media screen and (max-width: 900px) {
     height: 250vh;
    justify-content: flex-start;
    }


    h1 {
        margin-top: 3rem;
        font-size: 3rem;

        @media screen and (max-width: 900px) {
            text-align: center;
       
    }
    }
`

const Projects = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    height: 50rem;
 
    @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
       
    }

`

const Imagem = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     img {
        width: 70%;
        height: 45rem;
        border-top-left-radius: 20%;
        border-bottom-right-radius: 20% ;

        @media screen and (max-width: 900px) {
            height: 20rem;
            margin-top: 2rem;
    }

    }
`

const Texto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;


    p {
        margin-top: 2rem;
        text-align: left;
    }
`

const Titulo = styled.div`

h1{
    font-size: 2rem;
}

p{
    margin-top: 1rem;
    font-weight: bold;
    color: #868686;
}
`

const OutrosGrid = styled.div`
    display: flex;
    justify-content: Center;
    align-items: center;

    @media screen and (max-width: 900px) {
     flex-direction: column;
    }
`

const Outros = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    :hover{
        h2{
            display: block;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
        }
        img{
            filter: blur(0.4rem);
            cursor: pointer;
        }
    }

    img {
        width: 20rem;
        height: 15rem;
        margin: 2rem;

        @media screen and (max-width: 900px) {
            margin: 0;
            margin-top: 2rem;
        }
        
    }

    h2{
        position: absolute;
        display: none;
    }
`

const Others = styled.div`
    margin-top: 1rem;
`

export default function SomeProjects() {
    const imagens = [ChinaZun, Laplaza]
    const Nomes = ["China Zun", "La Plaza"]

    const [nome, setNome] = useState(Nomes[0])
    const [troca, setTroca] = useState(imagens[0])
    
    function TrocarPlaza() {
        setNome(Nomes[1])
        setTroca(imagens[1])
    }
    
    function TrocarChina() {
        setNome(Nomes[0])
        setTroca(imagens[0])
    }

    return(
        <Main>
            <h1>Some of our projects</h1>
            <Projects>
                <Imagem>
                    <img src={troca} alt="Predio" />
                </Imagem>
                <Texto>
                    <Titulo>
                        <h1>{nome}</h1>
                        <p>SkyScrapers</p>
                    </Titulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quos quia vitae? At <br /> ratione ad quod quidem natus, nihil enim illo repellendus, ipsam, voluptatem minus? Aut voluptates dolorum porro et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad odio neque quaerat maxime  <br /> sequi voluptate saepe, maiores voluptas est sit sed sint unde nulla, nobis eaque veniam  consequuntur reprehenderit. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus facilis adipisci accusamus consequatur, quia laudantium reprehenderit numquam magni a quis nobis ipsa eum id ex cumque mollitia illum eos omnis! <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quos quia vitae? At <br /> ratione ad quod quidem natus, nihil enim illo repellendus, ipsam, voluptatem minus? Aut voluptates dolorum porro et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ad odio neque quaerat maxime  <br /> sequi voluptate saepe, maiores voluptas est sit sed sint unde nulla, nobis eaque veniam  consequuntur reprehenderit. <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus facilis adipisci accusamus consequatur, quia laudantium reprehenderit numquam magni a quis nobis ipsa eum id ex cumque mollitia illum eos omnis!</p>
                    <Others>
                        <h2>Others:</h2>
                    </Others>
                    <OutrosGrid>
                        <Outros onClick={TrocarChina}>
                            <img src={ChinaZun} alt="Predio" />
                            <h2>China Zun</h2>                            
                        </Outros>
                        <Outros onClick={TrocarPlaza}>
                            <img src={Laplaza} alt="Predio" />
                            <h2>La Plaza</h2>
                        </Outros>
                    </OutrosGrid>
                </Texto>
            </Projects>
        </Main>
    )
}