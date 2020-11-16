import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { Box } from '@material-ui/core';

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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
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
          borderTop = {1}
          borderColor = 'grey.400'
          style={{
            display: 'flex',
            justifyContent : 'center',
            alignItems : 'center'
          }}>
          <Button variant='contained' color='secondary' startIcon={<DeleteIcon />}
            style={{
              margin: '5px',
            }}
          >
            Xóa
        </Button>
        </Box>
      </Accordion>
    </div>
  );
}
