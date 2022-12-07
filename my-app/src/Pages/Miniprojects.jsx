import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import {CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Grid, GridItem, Image, Text ,Button, UnorderedList, List, ListItem, ListIcon} from '@chakra-ui/react'
import weather from '../Assets/weather.png'
import tic from '../Assets/tic.png'
import todo from '../Assets/todo.png'
export const Miniprojects = () => {
  return (
    <Box>
         <Text  fontFamily= 'Poppins, sans-serif' fontSize='30px' mt={4} mb={10} textAlign='center' >Mini Projects</Text>
        <Box position='relative' gap='50px' display='grid' gridTemplateColumns={ { base:'repeat(1,1fr)', sm:"repeat(1,1fr)",md:"repeat(2,1fr)" ,lg:"repeat(2,1fr)" } } >
            <Box  mt='20px' data-aos="fade-up" className='ProjetcsBox' gap='30px' p={1}  >
              <Image width='fill' src={tic}  height='350px' margin='auto'   borderRadius='20px' />
              <Text fontWeight={1000}>TIC-TAC-TOE</Text>
                 <Text width='90%' margin='auto' >TIC-TAC-TOE is a popular game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.</Text><br />
                  <Text>TECH STACK USED</Text>
                  <Grid gridTemplateColumns='repeat(4,1fr)' gap='10px' width='90%' margin='auto'>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >REACT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >JAVA SCRIPT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >HTML</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >CSS</Box>
                    </Grid>
                      <Box display='flex' gap='20px'  mt='20px' p={4} >
                       <a href="https://github.com/sakti8093/Tic-Tac-Toe" target='blank' ><Button bg='black' color='white' colorScheme='black' leftIcon={ <AiFillGithub />} >   GITHUB</Button></a> 
                       <a href="https://tic-tac-toe-sakti.netlify.app" target='blank'> <Button colorScheme='red'  backgroundImage=' linear-gradient(15deg, red 0%, violet 100% )' color='white' className='button-wiggle'> LIVE LINK</Button></a>
                      </Box>
               </Box>
               <Box  mt='20px' data-aos="fade-up" className='ProjetcsBox' gap='30px' p={1}  >
              <Image width='fill' height='350px' margin='auto' src={weather}  borderRadius='20px' />
              <Text fontWeight={1000}>WEATHER FORECASTING APP</Text>
                 <Text width='90%' margin='auto' >Weather forecast is used for viewing current weather details of particular city , also you can view weather according to your current location </Text><br />
                  <Text>TECH STACK USED</Text>
                  <Grid gridTemplateColumns='repeat(4,1fr)' gap='10px' width='90%' margin='auto'>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >JAVA SCRIPT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >HTML</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >CSS</Box>
                    </Grid>
                      <Box display='flex' gap='20px'  mt='20px' p={4} >
                       <a href="https://github.com/sakti8093/Wether-Forecasting-App" target='blank' ><Button bg='black' colorScheme='black' color='white' leftIcon={ <AiFillGithub />} >   GITHUB</Button></a> 
                       <a href="https://weather-forecast-app-sakti.netlify.app" target='blank'> <Button  backgroundImage='linear-gradient(15deg, red 0%, violet 100% )' color='white' colorScheme='red' className='button-wiggle'> LIVE LINK</Button></a>
                      </Box>
               </Box>
               <Box  mt='20px' data-aos="fade-up" className='ProjetcsBox' gap='30px' p={1}  >
              <Image width='fill' src={todo} height='350px' margin='auto'   borderRadius='20px' />
                 <Text fontWeight={1000}>TODO-APP</Text>
                 <Text width='90%' margin='auto' >Todo App is a app where you can add ,edit and delete todos</Text>
                  <Grid gridTemplateColumns='repeat(4,1fr)' gap='10px' width='90%' margin='auto'>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >JAVA SCRIPT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >HTML</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >CSS</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >React</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >Nodejs</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >Express js</Box>
                    </Grid>
                      <Box display='flex' gap='20px'  mt='20px' p={4} >
                       <a href="https://github.com/sakti8093/Todo-App" target='blank' ><Button bg='black' colorScheme='black' color='white' leftIcon={ <AiFillGithub />} >   GITHUB</Button></a> 
                       <a href="https://todo-app-sakti.netlify.app/" target='blank'> <Button  backgroundImage=' linear-gradient(15deg, red 0%, violet 100% )' color='white' className='button-wiggle'> LIVE LINK</Button></a>
                      </Box>
               </Box>
         </Box>
    </Box>
  )
}


