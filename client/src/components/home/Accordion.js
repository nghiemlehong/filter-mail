import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { Box } from '@material-ui/core'
//Dialog
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
//API
import {MailAPI} from '../../api/mailAPI'
import {getToken} from '../../utils/Common'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 5
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,

  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export function ControlledAccordions(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleAgreeDelete = () => {
    const headers = { headers: { token: getToken() } }
    console.log(props._id)
    MailAPI.deleteMail(props._id,headers)
    .then(data=>{
        props.reset()
    })
    .catch(err => alert(err))
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Thông báo</DialogTitle>
        <DialogContent>
          <DialogContentText>Bạn muốn xóa thư này ? </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            HỦY
          </Button>
          <Button onClick={handleAgreeDelete} variant="contained"
            color="secondary" autoFocus >
            ĐỒNG Ý
          </Button>
        </DialogActions>
      </Dialog>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><b>{props.name}</b></Typography>
          <Typography className={classes.secondaryHeading}>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.content}
          </Typography>
        </AccordionDetails>
        <Box
          borderTop={1}
          borderColor='grey.400'
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Button variant='contained' color='secondary' startIcon={<DeleteIcon />}
            style={{
              margin: '5px',
            }}
            onClick={handleClickOpenDialog}
          >
            Xóa {props._id}
        </Button>
        </Box>
      </Accordion>
    </div>
  );
}
