import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Box } from '@chakra-ui/react';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projetcs from './Pages/Projetcs';

function App() {
  return (
    <> <Navbar/>
    <Box className='App' width='80%' margin='auto' marginTop='80px' >
      <HomePage/>
      <About/>
      <Projetcs/>
    </Box>
    </>
  );
}

export default App;
