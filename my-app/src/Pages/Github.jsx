import { Box, Image, Text, useColorModeValue } from "@chakra-ui/react";

export default function Git (){
    const bgColor= useColorModeValue('dark', 'light')
    
    return(
        <Box  mt='40px'>
        <Text fontFamily= 'Poppins, sans-serif' fontSize='30px' mt={2} mb={10} textAlign='center' >GitHub </Text>
        <img src='https://github-readme-streak-stats.herokuapp.com/?user=sakti8093&theme=light' alt="sakti8093"  />
        <a href="https://github.com/sakti8093"><img alt="sakti8093's Activity Graph" src="https://activity-graph.herokuapp.com/graph?username=sakti8093&custom_title=sakti8093's%20Contribution%20Graph&theme=react-light" /></a>
        </Box>
    )
}