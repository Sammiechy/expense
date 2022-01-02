
import './App.css';

import styled from "styled-components"
import Home from './Modules.js/Home';

const Container = styled.div` 
display: flex;
font-family:Montserrat;
flex-direction: column;
margin : 10px;
align-items: center;
font-size: 20px;
width: 100%;`;

const Header = styled.span`
color: black;
font-size : 25px;
font- weight: bold;`

function App() {
  return (
   
   <Container>
     <Header> Expense Trackor</Header>
     
     <Home/>
</Container>

  );
}

export default App;
