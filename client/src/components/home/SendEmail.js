import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {MyNotification} from '../../notifications/Notifications'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const handleSendMail = ()=>{
    MyNotification.sendMail('SEND_EMAIL')
    console.log('vao roi')
}

export  function SendEmail() {
  const classes = useStyles();

  return (
    <div>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField  
      label="Gửi đến" 
      variant="outlined" 
      fullWidth
      />
      <TextField  
      label="Tựa đề" 
      variant="outlined" 
      fullWidth
      />
       <TextField  
      label="Nội dung" 
      variant="outlined" 
      fullWidth
      multiline
      />
      <Button variant = "contained" color = "secondary" fullWidth
      onClick = {handleSendMail}
      >
         
         GỬI ĐI
      </Button>
    </form>
    </div>
  );
}
