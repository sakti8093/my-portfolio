import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Box } from '@chakra-ui/react';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projetcs from './Pages/Projetcs';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

function App() {
  return (
    <Box  backgroundColor='#f1f1f1'> 
    <Navbar/>
      <HomePage/>
    <Box className='App' width={{ base:'90%' , sm:'90%' ,md:'80%' ,lg:'80%' }}  margin='auto' marginTop='30px' >
      <About/>
      <Projetcs/>
      <Contact/>
    </Box>
    <Footer/>
    </Box>
  );
}

export default App;
