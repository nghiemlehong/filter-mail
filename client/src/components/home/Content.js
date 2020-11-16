import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MailIcon from '@material-ui/icons/Mail'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep'
import SendIcon from '@material-ui/icons/Send'
import { SendEmail } from './SendEmail'
import { ControlledAccordions } from './Accordion'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'rgb(201, 201, 201)',
  m: 1,
  border: 1,
};

export function Content() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };  

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab icon={<MailIcon />} {...a11yProps(0)} />
          <Tab icon={<DeleteSweepIcon />} {...a11yProps(1)} />
          <Tab icon={<SendIcon />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction} >
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Box
            style={{
              padding: '5px',
              overflowY: 'auto',
              height: '320px',
            }}
            borderRadius = "borderRadius"
            {...defaultProps}
          >
            <ControlledAccordions
              name="Nghiệm Lê"
              title="Tựa đề"
              content="Nội dung"
            />
            <ControlledAccordions
              name="Nghiệm Lê"
              title="Tựa đề"
              content="Nội dung"
            />
            <ControlledAccordions
              name="Nghiệm Lê"
              title="Tựa đề"
              content="Nội dung"
            />
            <ControlledAccordions
              name="Nghiệm Lê"
              title="Tựa đề"
              content="Nội dung"
            />
            <ControlledAccordions
              name="Nghiệm Lê"
              title="Tựa đề"
              content="Nội dung"
            />
           
          
          </Box>

        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <SendEmail />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
