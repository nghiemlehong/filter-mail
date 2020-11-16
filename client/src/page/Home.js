import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import { Main } from '../components/home/Main'
import { getToken } from '../utils/Common'
import { Redirect } from 'react-router-dom'


export function Home(props) {

    const [logged, setLogged] = useState(true)

    useEffect(() => {
        if (!getToken()) setLogged(false)
    }, [])

    if (logged === false) return <Redirect to="/" />
    return (
        <Container flex>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs='8'
                style={{
                    margin: 'auto',
                }}
            >
                <Main />
            </Grid>
        </Container>
    )
}