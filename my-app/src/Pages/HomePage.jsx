import { Box, Button, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Typed from 'react-typed';
import { FaInstagram } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

export default function HomePage() {
  return (
    <Box textAlign='center'  >
        <Text font fontSize='50px'  fontFamily= 'Poppins, sans-serif'  > Hello,I am <span className='myNameHomePage' >Sakti Prasad </span> </Text>
      <Text fontSize='25px' > <Typed  strings={['A Student','A Front-End Developer','A Back-End Developer','A Full-Stack Developer']}  typeSpeed={40} backSpeed={20} loop /> </Text>       
        <Box width='20%'  display='flex' margin='auto' textAlign='center' justifyContent='space-around' fontSize='35px'   >
        <Text padding={2} className='hover-1'  > < FaInstagram /> </Text>   
         <Text padding={2}  className='hover-2' > <AiFillGithub  /></Text>
         <Text padding={2} className='hover-2' > <BsLinkedin /> </Text>
        </Box>
    </Box>
  )
}
