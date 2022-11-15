import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Box, useColorModeValue } from '@chakra-ui/react';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projetcs from './Pages/Projetcs';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Git from './Pages/Github';


function App() {
  const bg = useColorModeValue('#f1f1f1', '#191919')
  return (
    <Box bg={bg} > 
    <Navbar/>
      <HomePage/>
    <Box className='App' width={{ base:'97%' , sm:'fill' ,md:'80%' ,lg:'80%' }}  margin='auto' marginTop='30px' >
      <About/>
      <Projetcs/>
      <Git/>
      <Contact/>
    </Box>
    <Footer/>
    </Box>
  );
}

export default App;
