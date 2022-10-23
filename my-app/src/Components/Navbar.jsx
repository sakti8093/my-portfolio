import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Box className='NavBar' width='100%' border='1px solid black'  display='flex' fontSize='25px' justifyContent='space-between'   position='fixed' top='0' zIndex='1000' >
        <Box p={4}>
            <Text  fontFamily='Lobster, cursive' > Sakti Prasad </Text>
        </Box>
        <Box  fontFamily= 'Poppins, sans-serif'  p={4}  gap='20px' display={{ base:'none' , sm:'none' ,md:'flex' ,md:'flex' }}  >
            <Text className='hover-underline-animation' >Home</Text>
            <Text className='hover-underline-animation' >About</Text>
            <Text className='hover-underline-animation' >Projects</Text>
            <Text className='hover-underline-animation'>Resume</Text>
        </Box>
    </Box>
  )
}
