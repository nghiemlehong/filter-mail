import React from 'react'
import {Card} from '@material-ui/core'
import {Header} from './Header'
import { makeStyles } from '@material-ui/core/styles'
import {Content} from './Content'
import {SearchAppBar} from './AppBar'


const useStyles = makeStyles({
    root: {
        width: 800,
        padding: 5,
        height : 650
    },
    media: {
        height: 140,
    }
})


export function Main(props)
{
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <Header/>
            <SearchAppBar/>
            <Content/>
        </Card>
    )
}