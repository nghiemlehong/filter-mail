import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import image from '../../assets/images/0026233645-email-marketing-1000x536.png'
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'   

import {UserAPI} from '../../api/userAPI'
import {MyNotification} from '../../notifications/Notifications'
import {Redirect} from 'react-router-dom'
import {setToken} from '../../utils/Common'
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
export function MediaCard(props) {
    const classes = useStyles();

    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [logged, setLogged] = useState(false)
    const [username, setUsername] = useState('')

    const demo = useSelector(state => state.listMail.list)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleLogin = () =>{   
        setLoading(true)
        UserAPI.login({username, password})
        .then(data =>{
            setToken(data.user.token)
            setLoading(false)
            MyNotification.login(true)
            setLogged(true)
        })
        .catch(err=>{
            setLoading(false)
            MyNotification.login(err.response.data.message)
        })
    }

    if(logged) return <Redirect to = "/home"/>
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
                        <b> ĐĂNG NHẬP</b>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <TextField
                    label="Tên đăng nhập"
                    variant="outlined"
                    style={{ width: 500 }}
                    value = {username}
                    onChange = {evt => setUsername(evt.target.value)}
                />
                <FormControl  variant="outlined" style={{ width: 500 }}>
                    <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type = {showPassword? 'text' : 'password'}
                        onChange = {(evt)=>setPassword(evt.target.value)}
                        value = {password}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    onClick = {handleClickShowPassword}
                                >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
            </CardActions>
            <CardActions
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button variant="contained" color="primary" disableElevation
                onClick = {handleLogin}
                >
                    ĐĂNG NHẬP {loading?<CircularProgress/>:''}
                </Button>
                <Button  
                variant="outlined" 
                color="primary"
                onClick = {props.signUp}
                >
                    ĐĂNG KÝ
                </Button>
            </CardActions>
        </Card>
    )
}