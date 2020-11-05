import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import image from '../../assets/images/0026233645-email-marketing-1000x536.png'
const useStyles = makeStyles({
   
    media: {
        height: 140,
    },
})
export function Header(props) {
    const classes = useStyles();
    return (
        <CardActionArea  >
            <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
                style={{ height: '80px' }}
            />
        </CardActionArea>

    )
}