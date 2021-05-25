import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    maxWidth:980,
    minWidth: 650,
    margin:'0 auto',
  },
  name:{
      fontSize:15,
      alignItems:'center',
    justifyContent:'center',
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('18:00', '동작구' ),
  createData('18:00', '용산구' ),
  createData('19:00', '성북구'),
  createData('20:00', '성동구'),
  createData('21:00', '중랑구'),
];

export default function Seoul() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.name}>시간</TableCell>
            <TableCell align="center" className={classes.name}>장소</TableCell>
            <TableCell align="right" className={classes.name}>선택하기&nbsp;&nbsp;&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} className={classes.name}>
              <TableCell component="th" scope="row" className={classes.name}>
                {row.name}
              </TableCell>
              <TableCell align="center" className={classes.name}>{row.calories}</TableCell>
              <TableCell align="right" className={classes.name}>
                  <Button variant="contained" color="primary" size="large">신청하기</Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
