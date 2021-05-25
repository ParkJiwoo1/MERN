import React, {useState, useEffect} from "react";
import NavBar from './NavBar';
import Footer from './Footer';
import {getCurrentUser} from '../app/LocalStorage';
import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon, MDBCol, MDBCardImage, MDBCardText, MDBCardTitle } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  container:{
      display: 'flex',
      width : 650,
      marginLeft: 100,
      marginTop : 100,
  },
  navbar:{
      display: 'flex',
  },
  tables : {
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const Profile = () => {
    const [currentUserID, setCurrentID] = useState('');

  useEffect(() => {
    setCurrentID(getCurrentUser());
  }, []);

  const classes = useStyles();
 
  return (
      <>
      <NavBar className={classes.navbar}/>
    <MDBRow className="my-5 w-75 ml-auto mr-auto d-flex " >
      <MDBCol md="6" lg="4" >
        <MDBCard personal className="my-5">
          <MDBCardImage
            top
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg"
            alt="MDBCard image cap"
          />
          <MDBCardBody>
            <MDBCardTitle>
              <a href="#!" className="title-one">
                {currentUserID}
              </a>
            </MDBCardTitle>
            <p className="card-meta">Joined in 2020</p>
            <hr />
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="6" lg="4" classname={classes.tables} >
        <BasicTable/>
        </MDBCol>
    </MDBRow>
    <Footer/>
    </>
  );
}

export default Profile;