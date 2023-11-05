import Header from './components/Header';
import GameBoard from './components/GameBoard';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  margin: 0;
`


function App() {
  return (
    <AppContainer>
       <Header />
        <GameBoard/>
    </AppContainer>
  );
}

export default App;
