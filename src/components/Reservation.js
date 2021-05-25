import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Location from './Location';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    marginLeft: '100px',
    marginTop: '100px',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  textField: {
    marginLeft: 150,
    marginRight: theme.spacing(10),
    width: 200,
  },
}));

export default function Reservation() {

  return (
      <>
      <NavBar/>
    
    <Location/>
    <Footer/>
    </>
  );
}
