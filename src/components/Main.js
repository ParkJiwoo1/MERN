import React, { useState, useEffect } from 'react';
import { Mail,Inbox,Send} from '@material-ui/icons';
import { Menu, MenuItem, ListItemIcon, ListItemText,withStyles} from '@material-ui/core';
import {useStyles} from './navstyle';
import CarouselPage from './carousel';
import Footer from './Footer';
import ContactPage from './Contact';
import NavBar from './NavBar';



function Main(){
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
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);
  
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  
  
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <>
        <NavBar/>
<CarouselPage/>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
       <StyledMenuItem>
          <ListItemIcon>
            <Send fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Mail fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Signup" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Inbox fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="About" />
        </StyledMenuItem>
      </Menu>
      <ContactPage/>
      <Footer/>
      </>
    )
}
export default Main;