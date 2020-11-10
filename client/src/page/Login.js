import React, {useState, useEffect} from 'react'
import { MediaCard } from '../components/login/Card'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import {getToken} from '../utils/Common'
import {Redirect} from 'react-router-dom'


export function Login(props) {

    const handleSignUp = () => {
        props.history.push('/signup')
        
    }

    return (
        <Container>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <MediaCard
                    signUp={handleSignUp}
                />
            </Grid>
        </Container>
    )
}