import { Flex } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/react'
import './App.css';
import logoTiendaBruja from './images/tbruja.svg'


function App() {
  return (
    <div className="App">
        <header>
          <Flex bg="brand.accent" h="6rem" justify="center" fill="white">
            <Image width="250px" src={logoTiendaBruja} alt="Logo TiendaBruja"/>
          </Flex>
        </header>
    </div>
  );
}

export default App;
