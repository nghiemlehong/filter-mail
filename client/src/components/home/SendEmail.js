import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { MyNotification } from '../../notifications/Notifications'
import { MailAPI } from '../../api/mailAPI'
import { getToken } from '../../utils/Common'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export function SendEmail() {
  const classes = useStyles();
  const [receiverUsername, setReceiverUsername] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  
  const resetState =  ()=>{
    setReceiverUsername('')
    setTitle('')
    setContent('')
  }

  const handleSendMail = () => {
    const sendMail = async()=>{
      try{
        const headers = { headers: { token: getToken() } }
        const role = await MailAPI.checkRole({content})
        const body = { receiverUsername, title, content, role : role.name }
        console.log(role.name)
        const data = await MailAPI.createMail(body,headers)
        console.log(data)
        MyNotification.sendMail(data.success)
      }catch(err){
        console.log(err)
      }
    }
   sendMail()
   resetState()
  }

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Gửi đến"
          variant="outlined"
          fullWidth
          value={receiverUsername}
          onChange={evt => setReceiverUsername(evt.target.value)}
        />
        <TextField
          label="Tựa đề"
          variant="outlined"
          fullWidth
          value={title}
          onChange={evt => setTitle(evt.target.value)}
        />
        <TextField
          label="Nội dung"
          variant="outlined"
          fullWidth
          multiline
          rows='5'
          value={content}
          onChange={evt => setContent(evt.target.value)}
        />
        <Button variant="contained" color="secondary" fullWidth
          onClick={handleSendMail}
        >
          GỬI ĐI
      </Button>
      </form>
    </div>
  );
}
