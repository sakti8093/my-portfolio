import { Box, Grid, GridItem, Image, Text ,Button, UnorderedList, List, ListItem, ListIcon} from '@chakra-ui/react'
import React from 'react'
import boat from '../Assets/Boat.png'
import firstpost from '../Assets/firstpost.png'
import tenner from '../Assets/tenner.png'
import { AiFillGithub } from 'react-icons/ai';
import {CheckCircleIcon } from '@chakra-ui/icons'

export default function Projetcs() {
  return (
    <Box id='projects' >
        <Text  fontFamily= 'Poppins, sans-serif' fontSize='30px' mt={4} mb={10} textAlign='center' >Projects</Text>
        <Box position='relative' gap='50px' display='grid' gridTemplateColumns={ { base:'repeat(1,1fr)', sm:"repeat(1,1fr)",md:"repeat(2,1fr)" ,lg:"repeat(2,1fr)" } } >
            <Box  mt='20px' data-aos="fade-up" className='ProjetcsBox' gap='30px' p={1}  >
              <Image width='fill' height='350px' margin='auto'  src={boat} borderRadius='20px' />
                 <Text width='90%' margin='auto' >Boat lifestyle is a ecommerce website which deals in lifestyle products like headphone,smart watch and a wide range,In this <span style={{ fontWeight:'1000' }} >collaborative</span>  project we have cloned the website with end to end user flow</Text><br />
                 <Text>Features</Text>
                 <List p={2}>
                 <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                    Completely Responsive
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                    Signup using OTP feature
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                    forgot password using OTP feature
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                    Add to cart feature with increase,decrease and quantity
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                    Add adress,check realtime pincode
                  </ListItem>
                  </List>
                  <Text>TECH STACK USED</Text>
                  <Grid gridTemplateColumns='repeat(4,1fr)' gap='10px' width='90%' margin='auto'>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >REACT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >CHAKRA UI</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >JSON </Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >JAVA SCRIPT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >HTML</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >CSS</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >GIT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >HEROKU</Box>
                    </Grid>
                      <Box display='flex' gap='20px'  mt='20px' p={4} >
                       <a href="https://github.com/sakti8093/boat-lifestyle-clone" target='blank' ><Button bg='black' color='white' leftIcon={ <AiFillGithub />} >   GITHUB</Button></a> 
                       <a href=" https://www.boat-lifestyle.com/" target='blank'> <Button  backgroundImage=' linear-gradient(15deg, red 0%, violet 100% )' color='white' className='button-wiggle'> LIVE LINK</Button></a>
                      </Box>
            </Box>
            <Box mt='20px' data-aos="fade-up" className='ProjetcsBox' gap='30px' p={1}  borderRadius='20px' >
              <Image width='fill' margin='auto' height='350px' src={firstpost} borderRadius='20px' />
                 <Text width='90%' margin='auto' >firstpost is a news website , covering world wide news and categories above 10,In this <span style={{ fontWeight:'1000' }} >collaborative</span>  project we have covered all categories with create,delete,update news for admin</Text><br />
                 <Text>Features</Text>
                 <List p={2}>
                 <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                    Completely Responsive
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                    Covered above 10 categories of news
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                    Create news,Update news,Delete news by admin
                  </ListItem>
                  </List>
                  <Text>TECH STACK USED</Text>
                  <Grid gridTemplateColumns='repeat(4,1fr)' gap='10px' width='90%' margin='auto'>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >JSON </Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >JAVA SCRIPT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >HTML</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >CSS</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >BOOTSTRAP</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >GIT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >HEROKU</Box>
                    </Grid>
                      <Box  bottom='1' display='flex' gap='20px'  mt='20px' p={4} >
                     <a href="https://github.com/sakti8093/firstpost" target='blank' >  <Button bg='black' color='white' leftIcon={ <AiFillGithub />} >   GITHUB</Button></a> 
                        <a href="https://firstpost-clone-masai.netlify.app/" target='blank'><Button  backgroundImage=' linear-gradient(15deg, red 0%, violet 100% )' color='white' className='button-wiggle'> LIVE LINK</Button></a>
                      </Box>
            </Box>
            <Box mt='20px' data-aos="fade-up" className='ProjetcsBox' gap='30px' p={1}  borderRadius='20px' >
              <Image width='fill' margin='auto' height='350px' src={tenner} borderRadius='20px' />
                 <Text width='90%' margin='auto' >Tenner Goods is a e-commerce app which deals with wooden goods,This is a <span style={{ fontWeight:'1000' }} >Indivisual</span>  clone cum creativity project of mine  </Text>
                 <Text>Features</Text>
                 <List p={2}>
                 <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                    Completely Responsive full stack website 
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                    Login/signup 
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                 Personalised cart and Delete from cart with quantity modifier
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green'  />
                   Search and Sorting
                  </ListItem>
                  </List>
                  <Text>TECH STACK USED</Text>
                  <Grid gridTemplateColumns='repeat(4,1fr)' gap='10px' width='90%' margin='auto'>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >JAVA SCRIPT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >HTML</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >CSS</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >REACT</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >MONGODB</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >NODEJS</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >EXPRESSJS</Box>
                    <Box  textAlign='center' borderRadius='10px' border='3px solid violet' >GIT</Box>
                    </Grid>
                      <Box  bottom='1' display='flex' gap='20px'  mt='20px' p={4} >
                      <a href="https://github.com/sakti8093/Tenner-Goods-Clone" target='blank' >  <Button bg='black' color='white' leftIcon={ <AiFillGithub />} >   GITHUB</Button></a> 
                        <a href="https://tender-goods-clone-sakti.netlify.app/" target='blank'><Button  backgroundImage=' linear-gradient(15deg, red 0%, violet 100% )' color='white' className='button-wiggle'> LIVE LINK</Button></a>
                      </Box>
            </Box>
        </Box>
        
        
    </Box>
  )
}
