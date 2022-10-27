import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import {useRef} from 'react';
import { Link } from 'react-scroll';
import { AiOutlineMenu } from 'react-icons/ai';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton,useDisclosure} from '@chakra-ui/react'

export default function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
 
  const OpenDrawer=()=>{
  onOpen();
  }
    
  const DrawerClose=()=>{
    onClose();
  }

  return (
    <Box className='NavBar' color='white' backgroundImage=' linear-gradient(15deg, red 0%, violet 100% )'width='100%' borderBottom='1px solid light-grey'  fontSize='25px'  position='fixed' top='0' zIndex='1000' >
       <Box width={{ base:'80%' , sm:'80%',md:'80%',lg:'80%' }} margin='auto'  display='flex'  justifyContent='space-between' >
       <Box p={4}>
            <Text  fontFamily='Lobster, cursive' > Sakti Prasad </Text>
        </Box>
        <Box  fontFamily= 'Poppins, sans-serif'  p={4}  gap='20px' display={{ base:'none' , sm:'none' ,md:'flex' ,md:'flex' }}  >
            <Link to="home"  spy={true} smooth={true} offset={50} duration={500}  className='hover-underline-animation' >Home</Link>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}  className='hover-underline-animation' >About</Link>
            <Link to="projects" spy={true} smooth={true} offset={50} duration={500}  className='hover-underline-animation' >Projects</Link>
            <Text className='hover-underline-animation'>Resume</Text>
        </Box>
        <Box onClick={OpenDrawer} fontSize='40px' justifyContent='flex-end' mt={4}  display={{ base:'block' , sm:'block' ,md:'none' ,md:'none' }}  >
          <AiOutlineMenu/>
        </Box>
       </Box>
       <Drawer 
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody  fontFamily= 'Poppins, sans-serif'  >
         <Text onClick={DrawerClose}  fontSize='30px' p={2} >   <Link to="home"       spy={true} smooth={true} offset={50} duration={500}  >Home</Link></Text>
         <Text onClick={DrawerClose} fontSize='30px' p={2}>  <Link to="about"     spy={true} smooth={true} offset={50} duration={500}   >About</Link></Text>
         <Text onClick={DrawerClose}  fontSize='30px' p={2} >   <Link to="projects"  spy={true} smooth={true} offset={50} duration={500}  >Projects</Link></Text>
            <Text  fontSize='30px' p={2} >Resume</Text>
          </DrawerBody>

          <DrawerFooter>
        
     
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
