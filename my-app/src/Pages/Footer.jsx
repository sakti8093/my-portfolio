import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { SiGmail } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  return (
    <Box backgroundColor='#262626' mt='50px' paddingTop='30px' paddingBottom='30px' borderTopRadius='30px' >
      <Box  display={{ base:'block' ,sm:'block' ,md:'flex' ,lg:'flex' }} width={{ base:'90%' ,sm:'90%' ,md:'80%' ,lg:'80%' }}  margin='auto' gap='30px'  flexWrap='wrap'>
        <Text width={{ base:'80%' ,sm:'80%' ,md:'30%' ,lg:'30%' }}  color='white' >Software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines.</Text>
        <Box width={{ base:'80%' ,sm:'80%' ,md:'60%' ,lg:'60%' }} margin='auto' justifyContent='flex-end' display='flex' gap='30px'  >
          <Box background='#393737' fontSize='40px' padding='20px'  width='80px' height='80px' borderRadius='50%' className='socialIconsCss' > <SiGmail/> </Box>
          <Box background='#393737' fontSize='40px' padding='20px'  width='80px' height='80px' borderRadius='50%' className='socialIconsCss' > <AiFillGithub/> </Box>
          <Box  background='#393737' fontSize='40px' padding='20px'  width='80px' height='80px' borderRadius='50%' className='socialIconsCss' > <BsLinkedin/> </Box>
        </Box>
      </Box>
      <Box width='80%' margin='auto' mt='10px' border='1px solid #393737' ></Box>
      <Text className='xsign' textAlign='center' color='white' >©2022 || sakti prasad</Text>
    </Box>
  )
}
