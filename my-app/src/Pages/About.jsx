import { Box, Button, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import MyPhoto from '../Assets/MyPhoto.jpg'

export default function About() {
    const skillbg = useColorModeValue('#f1f1f1', '#191919')
    const textColor= useColorModeValue('black', 'white')


    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Resume.pdf').then(response => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Resume.pdf';
                alink.click();
            })
        })
    }
  return (
    <Box id='about'  >  
    <Text  fontFamily= 'Poppins, sans-serif' fontSize='30px' mt={2} mb={10} textAlign='center' >About Me</Text>
    <Box display={{ base:'flex' ,sm:'flex' ,md:'flex' ,lg:'flex' }} flexWrap='wrap' width='100%' margin='auto' justifyContent='space-evenly' boxShadow=' rgba(0, 0, 0, 0.35) 0px 5px 15px' p={8}  borderRadius='20px'  >
         <Box data-aos="fade-right" width={{ base:'100%', sm:'100%',md:'40%' ,lg:'40%' }} gap='10%'>
                   <Box>
                    <Image src={MyPhoto} borderRadius='50%' width='40%' margin='auto' mt={2} mb={6} />
                  </Box>
                <Box width='100%' margin='auto' >
                        <Text width='100%' >
                        Software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines.
                        </Text>
                        <Box width={{ base:'90%' , sm:'90%' ,md:'70%' ,lg:'70%'}} display='block' margin='auto' className="custom-btn btn-11" mt={4} fontFamily='Poppins, sans-serif' textAlign='center' onClick={onButtonClick} > DOWNLOAD CV</Box>
                </Box>
        </Box>
        <Box data-aos="fade-left" width={{ base:'100%', sm:'100%',md:'50%' ,lg:'50%' }} >
                         <Box bg={skillbg} className="skills">
                            <Box className="skills-bar">
                            <Box className="bar">
                                <Box className="info">
                                <Text color={textColor} >HTML</Text>
                                </Box>
                                <Box className="progress-line"><span className="html"></span></Box>
                                <Box className="bar">
                                <Box className="info">
                                    <Text color={textColor} >CSS</Text>
                                </Box>
                                <Box className="progress-line"><span className="css"></span></Box>
                                <Box className="bar">
                                    <Box  className="info">
                                    <Text color={textColor} >JAVASCRIPT</Text>
                                    </Box>
                                    <Box className="progress-line"><span className="javascript"></span></Box>
                                    <Box className="bar">
                                    <Box className="info">
                                        <Text color={textColor} >REACT</Text>
                                    </Box>
                                    <Box className="progress-line">
                                        <span className="react"></span>
                                    </Box>
                                    <Box className="bar">
                                        <Box className="info">
                                        <Text color={textColor} >MOGODB</Text>
                                        </Box>
                                        <Box className="progress-line"><span className="java"></span></Box>
                                    </Box>
                                    <Box className="bar">
                                        <Box className="info">
                                        <Text color={textColor} >EXPRESS JS</Text>
                                        </Box>
                                        <Box className="progress-line"><span className="expressjs"></span></Box>
                                    </Box>
                                    <Box className="bar">
                                        <Box className="info">
                                        <Text color={textColor} >NODE JS</Text>
                                        </Box>
                                        <Box className="progress-line"><span className="nodejs"></span></Box>
                                    </Box>
                                    </Box>
                                </Box>
                                </Box>
                            </Box>
                            </Box>
                        </Box>
            </Box>
    </Box>

</Box>
  )
}
