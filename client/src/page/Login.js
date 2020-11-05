import React from 'react'
import { MediaCard } from '../components/login/Card'
import { Container}  from '@material-ui/core'
import {Grid} from '@material-ui/core'


export function Login(props) {

    const handleSignUp = ()=>{
        props.history.push('/signup')    
    }
    return(
        <Container>
            <Grid 
              container
              direction="row"
              justify="center"
              alignItems="center"
              >
                 <MediaCard 
                 signUp = {handleSignUp}
                 />
            </Grid>
        </Container>
    )
}