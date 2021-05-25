import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Seoul from '../scedule/seoul';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10}>
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
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Tabs: {
    backgroundColor: 'white',
    color:'black',
    border:'none',
   margin: '0 auto',
  },
  links:{
      width:10,
  },
  container: {
    display: 'flex',
    marginLeft: '100px',
    marginTop: '100px',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
}));

export default function Location() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <form className={classes.container} noValidate>
    
      <TextField
        id="date"
        label="date"
        type="date"
        defaultValue="2021-05-25"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          indicatorColor="primary"
          className={classes.Tabs}
        >
          <LinkTab label="서울" href="../scedule/seoul" {...a11yProps(0)} className={classes.links}/>
          <LinkTab label="경기" href="/tuesday" {...a11yProps(1)} className={classes.links}/>
          <LinkTab label="인천" href="/Wendesday" {...a11yProps(2)} className={classes.links}/>
          <LinkTab label="청주" href="/Thursday" {...a11yProps(3)} className={classes.links}/>
          <LinkTab label="대전 " href="/Friday" {...a11yProps(4)} />
          <LinkTab label="부산 " href="/Saturday" {...a11yProps(5)} />
          <LinkTab label="울산" href="/Sunday" {...a11yProps(6)} />
          <LinkTab label="광주" href="/Sunday" {...a11yProps(7)} />
          <LinkTab label="대구" href="/Sunday" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Seoul/>
      </TabPanel>
  
      
    </div>
    </>
  );
}
