import styled from 'styled-components';
export const Container= styled.div`
  background: ${(props)=> props.background};
  width: 100vw;
  max-width: 100vw;
  display: flex;
  height: ${(props)=> props.height};
`;

const ContainerLeft= styled.div`
  width: 40%;
  min-width:40%;
  height: 100%;
  display: flex;
 
`;
const ContainerRight= styled.div`
  width: 60vw;
  height: 100%;
`;
export const ContainerRightTop= styled(ContainerRight)`
  padding-left: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  h1{
    color: #58190A;
    leading-trim: both;
    text-edge: cap;
    font-size: 4.5rem;
    font-family: Source Serif Pro;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  h2{
    color: #58190A;
    leading-trim: both;
    text-edge: cap;
    font-size: 2.375rem;
    font-family: Source Serif Pro;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  span{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
    p{
    color: #9B6647;
    leading-trim: both;
    text-edge: cap;
    font-size: 1.9rem;
    font-family: Source Serif Pro;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
   
  }
  button{
    width: 1.6rem;
    height: 1.6rem;
    border: 2px solid #9B6647;
    border-radius: 100px;
    font-size: 1.2rem;
    color: #9B6647;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    font-weight: bold;
  }
  }
  
  
`;
export const ContainerLeftTop=styled(ContainerLeft)`
    flex-direction: column;
    justify-content: center;
    align-items: end;
`;
export const ContainerLeftBottom=styled(ContainerLeft)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3{
    color: #FEECE0;
    leading-trim: both;
    text-edge: cap;
    font-size: 2.375rem;
    font-family: Source Serif Pro;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  ul{
    margin-left: 10vw;
    margin-top: 2vh;
    li{
      color: #FFF;
      leading-trim: both;
      text-edge: cap;
      font-size: 1.5rem;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
export const ContainerRightBottom=styled(ContainerRight)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 10vh;
  h3{
    color: #FEECE0;
    leading-trim: both;
    text-edge: cap;
    font-size: 2.375rem;
    font-family: Source Serif Pro;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  ol{
    margin-top: 2vh;
    margin-left: 2vw;
    li{
      color: #FFF;
      leading-trim: both;
      text-edge: cap;
      font-size: 1.5rem;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;