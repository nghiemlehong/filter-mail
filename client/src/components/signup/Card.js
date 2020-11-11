import React, { useState } from 'react'
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
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@material-ui/core'

import {useHistory} from 'react-router-dom'
import {UserAPI} from '../../api/userAPI'
import {MyNotification} from '../../notifications/Notifications'
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
export function MediaCardSignup(props) {
    const classes = useStyles();
    const [username , setUsername] = useState('')
    const [plainPassword, setPlainPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [name, setName] = useState('')


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    
    let history = useHistory()

    const handleBack = ()=>{
        history.push('/')
    }
    
    const handleSignUp = ()=>{
        UserAPI.signUp({username, plainPassword, name})
        .then(result =>{
            MyNotification.signUp(result.success)
            history.push('/')
        })
        .catch(err => {
            MyNotification.signUp(err.response.data.message)
        })
    }

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
                        <b> ĐĂNG KÝ TÀI KHOẢN</b>
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
                <FormControl variant="outlined" style={{ width: 500 }}>
                    <InputLabel htmlFor="outlined-adornment-password">Mật khẩu</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(evt) => setPlainPassword(evt.target.value)}
                        value={plainPassword}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>

            </CardActions>
            <CardActions>
                <TextField
                    label="Họ tên"
                    variant="outlined"
                    fullWidth
                    value ={name}
                    onChange = {evt => setName(evt.target.value)}
                />
            </CardActions>
            <CardActions
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Button 
                variant="contained" color="primary" disableElevation
                onClick = {handleSignUp}
                >
                    ĐĂNG KÝ
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleBack}
                >
                    QUAY LẠI
                </Button>
            </CardActions>
        </Card>
    )
}