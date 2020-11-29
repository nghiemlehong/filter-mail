import React from 'react'
import { MediaCard } from '../components/login/Card'
import { Container } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import {useHistory} from 'react-router-dom'


export function Login(props) {

    let history = useHistory()
    const handleSignUp = () => {
        history.push('/signup')
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