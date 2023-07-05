import { Container, ContainerLeftBottom, ContainerLeftTop,ContainerRightTop,ContainerRightBottom } from "./style.sc";
import { useState } from "react";
import car from './assets/car.svg'
import Pamonha from './assets/Pamonha.png';
import Panela from './assets/panela.svg';
function App() {
  var[porcao,setPorcao]=useState(1);
  return(
   <>
    <Container background="#FEECE0" height="60vh">
      <ContainerLeftTop>
        <img src={Pamonha} alt="" />
      </ContainerLeftTop>
      <ContainerRightTop>
        <h1>Pamonha</h1>
        <h2>Prato típico com milho verde ralado</h2>
        <span>
          <p>Porções</p>
          <button onClick={()=>setPorcao(porcao>1?porcao-=1:1)}> - </button>
          <p>{porcao>9?porcao:`0${porcao}`}</p>
          <button onClick={()=>setPorcao(porcao+=1)}>+</button>
        </span>
      </ContainerRightTop>
      </Container>
    <Container background="#9B6647" height="40vh">
      <ContainerLeftBottom>
        <h3><img src={car} alt="car" /> Ingredientes</h3>
        <ul>
          <li>{`${1*porcao} espiga de milho verde`}</li>
          <li>{`${1*porcao} colher de sopa de açúcar`}</li>
          <li>{`${1*porcao} colher de sopa de manteiga`}</li>
          <li>sal a gosto</li>
          <li>palha de milho(para embrulhar)</li>
        </ul>
      </ContainerLeftBottom>
      <ContainerRightBottom>
      <h3><img src={Panela} alt="car" /> Modo de preparo</h3>
      <ol>
        <li>Descasque a espiga de milho e corte os grãos.</li>
        <li>Bata o milho, açúcar, manteiga e sal no liquidificador.</li>
        <li>Coloque a massa nas palhas de milho e feche bem.</li>
        <li>Cozinhe em água fervente por cerca de 40 minutos.</li>
        <li>Deixe esfriar e sirva.</li>
      </ol>
      </ContainerRightBottom>

    </Container>
    </>
  );
}

export default App;
