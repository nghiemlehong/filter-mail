import React from 'react'
import { Container, Grid } from '@material-ui/core'
import {Main} from '../components/home/Main'
import {removeSession} from '../utils/Common'


export function Home(props) {

    const handleLogout = () =>{
        props.history.push ('/')
        removeSession()
    }
    
    return (
        <Container flex>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs='8'
                style={{ margin: 'auto' }}
            >
                <Main
                    logout = {handleLogout}
                />
            </Grid>
        </Container>
    )
}