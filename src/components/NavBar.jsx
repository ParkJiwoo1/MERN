import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {getCurrentUser, removeCurrentUser} from '../app/LocalStorage';
import {AppBar, Toolbar, Typography, Button,Menu, MenuItem,withStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { SportsBasketball} from '@material-ui/icons';
import './nav.css';
import {useStyles} from './navstyle';


function Navigation() {
  
  const history = useHistory();

  const [currentUserID, setCurrentID] = useState('');

  useEffect(() => {
    setCurrentID(getCurrentUser());
  }, []);

  const logout = () => {
    setCurrentID('');
    removeCurrentUser();
  }

  const classes=useStyles();
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    history.push('/');
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar className={classes.Appbar}>
       <Toolbar>
              <Button  aria-controls="simple-menu" aria-haspopup="true" className={classes.menubutton} onClick={handleClick}>
                <SportsBasketball />
                </Button>
                  <Typography className={classes.name}>
                     Basket Ball
                  </Typography>
                  <div className="buttons">
                    {currentUserID ? 
                     <div className="after">
                       <Typography className={classes.user}>
                      {currentUserID}님
                  </Typography>
                  <Button className={classes.button} onClick={logout}>
                      Logout
                </Button>
                <Link to="/Reservation">
                  <Button className={classes.button}>
                  Reservation
                </Button>
                </Link>
                <Link to="/Profile">
                  <Button className={classes.button}>
                  Profile
                </Button>
                </Link>
                </div> :
                    <div className="before">
                  <Link to="/Review">
                  <Button className={classes.button}>
                  review
                </Button>
                </Link>
                  <Link to="/SignIn">
                  <Button className={classes.button}>
                  LOGIN
                </Button>
                </Link>
                <Link to='/SignUp'>
                <Button className={classes.button}>
                      Sign up
                </Button>
                </Link>
                <Link to='/testing'>
                <Button className={classes.button}>
                      Test
                </Button>
                </Link>
                </div> 
                }
                </div>
         </Toolbar>
      </AppBar>

      
</>
  );
}

export default Navigation;