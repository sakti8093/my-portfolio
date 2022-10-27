import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function About() {
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
    <Box id='about' >
    <Text  fontFamily= 'Poppins, sans-serif' fontSize='30px' mt={2} mb={10} >About Me</Text>
    <Box display={{ base:'flex' ,sm:'flex' ,md:'flex' ,lg:'flex' }} flexWrap='wrap' width='95%' margin='auto' justifyContent='space-evenly' boxShadow=' rgba(0, 0, 0, 0.35) 0px 5px 15px' p={8}  borderRadius='20px' >
         <Box data-aos="fade-right" width={{ base:'100%', sm:'100%',md:'40%' ,lg:'40%' }} gap='10%'>
                   <Box>
                    <Image src='https://bolby-react.vercel.app/images/avatar-2.svg' width='40%' margin='auto' mt={2} mb={6} />
                  </Box>
                <Box width='100%' margin='auto' >
                        <Text width='100%' >
                        Software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines.
                        </Text>
                        <Box width={{ base:'90%' , sm:'90%' ,md:'70%' ,lg:'60%'}} display='block' margin='auto' className="custom-btn btn-11" mt={4} fontFamily='Poppins, sans-serif' textAlign='center' onClick={onButtonClick} > DOWNLOAD CV</Box>
                </Box>
        </Box>
        <Box data-aos="fade-left" width={{ base:'100%', sm:'100%',md:'50%' ,lg:'50%' }} >
                         <div class="skills">
                            <div class="skills-bar">
                            <div class="bar">
                                <div class="info">
                                <span>HTML</span>
                                </div>
                                <div class="progress-line"><span class="html"></span></div>
                                <div class="bar">
                                <div class="info">
                                    <span>CSS</span>
                                </div>
                                <div class="progress-line"><span class="css"></span></div>
                                <div class="bar">
                                    <div class="info">
                                    <span>JAVASCRIPT</span>
                                    </div>
                                    <div class="progress-line"><span class="bootstrap"></span></div>
                                    <div class="bar">
                                    <div class="info">
                                        <span>REACT</span>
                                    </div>
                                    <div class="progress-line">
                                        <span class="javascript"></span>
                                    </div>
                                    <div class="bar">
                                        <div class="info">
                                        <span>JAVA</span>
                                        </div>
                                        <div class="progress-line"><span class="c"></span></div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
            </Box>
    </Box>
</Box>
  )
}
