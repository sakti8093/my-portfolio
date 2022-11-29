import { Box, Button, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Typed from 'react-typed';
import { FaInstagram } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import img1 from '../Components/img1.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function HomePage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  return (
    <Box width='100%' mt='70px'  position='relative' >
    <Box height={{ base:'1000px'  }} >
      <Image opacity='0.9' filter='blur(1px)' width='100%' height='1000px' src='https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80' />
      </Box>
    <Box backgroundColor= 'rgb(0,0,0,0.7)' position='absolute' top='05%' left='10%'  width='80%' margin='auto' border='4px solid black' id='home' marginTop='150px' marginBottom='150px' textAlign='center' p={2}  >
        <Text  data-aos="fade-left"  fontSize={{ base:'50px',sm:'50px' ,md:'70px' ,lg:'70px' }}  fontFamily= 'Poppins, sans-serif' color='white'  > Hi <span className='wave'>👋</span> ,I am <span >Sakti Prasad </span> </Text>
      <Text data-aos="fade-right" fontSize='35px' color='white' > <Typed  strings={['A Student','A Developer','An Engineer']}  typeSpeed={40} backSpeed={20} loop /> </Text>       
        {/* <Box width='20%'  display='flex' margin='auto' textAlign='center' justifyContent='space-around' fontSize='35px' mt={10} gap='10px' >
        <Text color='red' boxShadow=' rgba(50, 50, 93, 0.25 0px 30px 60px -12px inset), rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset' borderRadius='10px' padding={2} className='hover-1' > < FaInstagram /> </Text>   
         <Text color='red' boxShadow=' rgba(50, 50, 93, 0.25 0px 30px 60px -12px inset), rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'  borderRadius='10px' padding={2}  className='hover-2' > <AiFillGithub  /></Text>
         <Text  color='red'  boxShadow=' rgba(50, 50, 93, 0.25 0px 30px 60px -12px inset), rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'  borderRadius='10px' padding={2} className='hover-2' > <BsLinkedin /> </Text>
        </Box> */}
        <Box width={{ base:'80%' ,sm:'80%' ,md:'40%' ,lg:"40%" }}  margin='auto' marginTop='30px' >
        <Carousel  responsive={responsive} autoPlay infinite arrows={false} centerMode={true} >
        <Image width='60px'  height='60px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' />
        <Image width='60px' height='60px' src='https://cdn-icons-png.flaticon.com/512/919/919826.png' / >
        <Image width='60px' height='60px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/768px-Unofficial_JavaScript_logo_2.svg.png?20141107110902'/>
        <Image width='60px' height='60px' src='https://reactscript.com/wp-content/uploads/2016/06/React-Components-For-The-Web-Animations-API.gif'/>
        <Image width='60px' height='60px' src='data:image/jpeg;base64,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'/>
        <Image width='60px' height='60px' src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'/>
        <Image width='60px' height='60px' src='https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png'/>
        <Image width='60px' height='60px' src='https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png'/>
        <Image width='60px' height='60px' src='https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png'/>
        </Carousel>
        </Box>
       </Box>
    </Box>)

}