import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import image from '../assets/images/0026233645-email-marketing-1000x536.png'


const useStyles = makeStyles({
    root: {
        width: 600,
        marginTop: "50px",
        padding: 5
    },
    media: {
        height: 140,
    },
})
export function Header(props) {
    const classes = useStyles();
  

    
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        style={{
                            textAlign: "center",
                        }}
                    >
                        <b> FILTER MAIL</b>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}