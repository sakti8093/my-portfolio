import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import boat from '../Assets/Boat.png'

export default function Projetcs() {
  return (
    <Box id='projects' >
        <Text  fontFamily= 'Poppins, sans-serif' fontSize='30px' mt={4} mb={10}  >Projects</Text>
        <Box  gap='50px' >
            <Box mt='20px' data-aos="fade-up" display={{ base:'block' , sm:'block' , md:'flex' ,lg:'flex' }} className=' ProjetcsBox' gap='30px' p={6} boxShadow=' rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='20px' >
              <Image width={{ base:'100%' , sm:'100%' , md:'60%' ,lg:'60%' }}   src={boat} borderRadius='20px' />
             <Box width={{ base:'90%' , sm:'90%' , md:'40%' ,lg:'30%' }} >
                 <Text width='90%' >Clone of boAt Lifestyle with end to end Functonality </Text>
                <Box></Box>
             </Box> 
            </Box>
            <Box  mt='20px' data-aos="fade-up" display='flex' className=' ProjetcsBox' gap='30px' p={6} boxShadow=' rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='20px' >
              <Image width='60%'  src={boat} borderRadius='20px' />
              <Text width='30%' >Clone of boAt Lifestyle with end to end Functonality </Text>
            </Box>
            <Box  mt='20px' data-aos="fade-up" display='flex' className=' ProjetcsBox' gap='30px' p={6} boxShadow=' rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='20px' >
              <Image width='60%'  src={boat} borderRadius='20px' />
              <Text width='30%' >Clone of boAt Lifestyle with end to end Functonality </Text>
            </Box>
        </Box>
    </Box>
  )
}
