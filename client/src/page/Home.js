import React from 'react'
import { Container, Grid } from '@material-ui/core'
import {Main} from '../components/home/Main'
import {NotificationContainer} from 'react-notifications'

export function Home(props) {

    const handleLogout = () =>{
        props.history.push ('/')
    }
    return (
        <Container flex>
            <NotificationContainer/>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs='8'
                style={{ margin: 'auto' }}
            >
                <Main/>
            </Grid>
        </Container>
    )
}