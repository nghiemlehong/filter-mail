import React from 'react'
import { Container, Grid } from '@material-ui/core'
import {MediaCardSignup} from '../components/signup/Card'

export function Signup(props) {

    return (
        <Container>
            <Grid
                 container
                 direction="row"
                 justify="center"
                 alignItems="center"
            >
                <MediaCardSignup
                
                />
            </Grid>
        </Container>
    )
}