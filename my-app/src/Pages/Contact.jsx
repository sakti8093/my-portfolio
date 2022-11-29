import { Box, FormControl, FormLabel, Image, Input, Text, Textarea,Button, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

let initState={
  from:"",
  name:"",
  message:""
}

export default function Contact() {

  const [data,setData] = useState(initState);

  const handleChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value })
  }


  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(data);
     let res= fetch('https://sakti-portfolio.onrender.com/sendmail',{
        method:'POST',
        headers:{ 'content-type': 'application/json' },
        body: JSON.stringify(data)
     })
    
  }



  const textColor= useColorModeValue('white', 'black')
  return (
    <Box  marginTop='50px' position='relative' boxShadow='5px 5px 15px #D1D9E6, -5px -5px 15px ' borderRadius='30px' >
        <Image width='full'  src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/p-419-jackanstey-rp-july2019-0021.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6c1c4bd08a5ec2fc15357980fa4eb48f' height='600px' borderRadius='30px' />
        <Box  width='full' height='100%'  background='rgba(219, 21, 99, 0.8)' position='absolute' top='0' borderRadius='30px' >
        <Text  textAlign='center' position='absolute' top='2' left={{ base:'15%',sm:'20%',md:'32%',lg:'40%'}}  fontSize={{ base:'25px', sm:'25px' ,md:'30px' ,lg:'35px' }} fontFamily= 'Poppins, sans-serif' color='white'  >CONTACT ME </Text>
                <Box  data-aos="zoom-in" position='absolute' width={{ base:'90%' ,sm:'80%',md:'80%',lg:"50%" }} top='15%' left={{base:'05%',sm:'10%',md:'10%',lg:'25%'}} backgroundColor='white' borderRadius='30px'  >
                    <Box  p={8}  margin='auto'  >
                        <form onSubmit={handleSubmit}>
                        <FormLabel color='black'>Name</FormLabel>
                        <Input backgroundColor='gray.200' name='name' onChange={handleChange} value={data.name} />
                        <FormLabel  color='black'>Email Adress</FormLabel>
                        <Input backgroundColor='gray.200' name='from' onChange={handleChange} value={data.from} />
                        <FormLabel  color='black'>Message</FormLabel>
                        <Textarea  backgroundColor='gray.200' rows='6' size='lg' name='message' onChange={handleChange} value={data.message} />
                        <Button type='submit' display='block' margin='auto' mt={2} variant='outline' colorScheme='red'  >SUBMIT</Button>
                        </form>
                    </Box>
                </Box>
        </Box>
    </Box>
  )
}
