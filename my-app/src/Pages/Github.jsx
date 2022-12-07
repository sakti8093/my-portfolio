import { Box, Image, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Git (){
    const bgColor= useColorModeValue('dark', 'light') 
    const { colorMode, toggleColorMode } = useColorMode() 
    console.log(colorMode)
    return(
        <Box  mt='40px'>
        <Text fontFamily= 'Poppins, sans-serif' fontSize='30px' mt={2} mb={10} textAlign='center' >GitHub </Text>
        { colorMode=="light" ?
 <><Image margin='auto' src='https://github-readme-streak-stats.herokuapp.com/?user=sakti8093&theme=light' alt="sakti8093"  />
   <a href="https://github.com/sakti8093"><Image mt={10}  src="https://activity-graph.herokuapp.com/graph?username=sakti8093&custom_title=sakti8093's%20Contribution%20Graph&theme=react-light" /></a></> :
   <><Image margin='auto' src='https://github-readme-streak-stats.herokuapp.com/?user=sakti8093&theme=dark' alt="sakti8093"  />
   <a href="https://github.com/sakti8093"><Image mt={10}  src="https://activity-graph.herokuapp.com/graph?username=sakti8093&custom_title=sakti8093's%20Contribution%20Graph&theme=react-dark" /></a></>}
        </Box>
    )
}
// <img src='https://github-readme-streak-stats.herokuapp.com/?user=sakti8093&theme=light' alt="sakti8093"  />
//<a href="https://github.com/sakti8093"><img alt="sakti8093's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=sakti8093&custom_title=sakti8093's%20Contribution%20Graph&theme=react-light" /></a>