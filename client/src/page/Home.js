import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {Main} from '../components/home/Main'


export function Home(props)
{
    return(
        <Container flex>
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs = '8'
              style = {{margin : 'auto'}}
              >
              <Main/>
            </Grid>
        </Container>
    )
}