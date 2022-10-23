import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

export default function Projetcs() {
  return (
    <Box>
        <Text  fontFamily= 'Poppins, sans-serif' fontSize='30px' mt={4} mb={10}  >Projects</Text>
        <Grid gridTemplateColumns='repeat(3,1fr)' gap='50px' >
            <GridItem border='1px solid black' >
              
            </GridItem>
        </Grid>
    </Box>
  )
}
