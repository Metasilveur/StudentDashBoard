import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {
  Card,
  CardHeader,
  CardContent
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});


const Dashboard4 = props => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardContent>

            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell >Subject</TableCell>
                <TableCell align="left">Bloc</TableCell>
                <TableCell align="left">Grade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.graph.map(row => (
                <TableRow key={row.matiere}>
                  <TableCell >
                    {row.matiere}
                  </TableCell>
                  <TableCell align="left">{row.bloc}</TableCell>
                  <TableCell align="left">{row.note}</TableCell>
                </TableRow>
                ))}
              </TableBody>
            </Table>

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}


export default Dashboard4;