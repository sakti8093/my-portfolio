import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function About() {
  return (
    <Box>
    <Text  fontFamily= 'Poppins, sans-serif' fontSize='30px' mt={2} mb={10} >About Me</Text>
    <Box display='flex' width='90%' margin='auto' justifyContent='space-evenly' boxShadow=' rgba(0, 0, 0, 0.35) 0px 5px 15px' p={8}  borderRadius='20px' >
        <Box>
            <Image src='https://bolby-react.vercel.app/images/avatar-2.svg' width='100%' />
        </Box>
        <Box  display='flex' width='80%' gap='40px'>
            <Box width='40%' >
                <Text>
                Software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines.
                </Text>
                <Box width='60%' className="custom-btn btn-11" mt={4} fontFamily='Poppins, sans-serif'  > DOWNLOAD CV</Box>
            </Box>
            <Box width='60%' border='1px solid red' >
              <Text>Progress Bar</Text>
              <Text>Progress Bar</Text>
              <Text>Progress Bar</Text>
            </Box>
        </Box>
    </Box>
</Box>
  )
}
