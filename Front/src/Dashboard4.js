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

const rows = [
  { matiere:'Matière 1', bloc:'Bloc 1', note:10},
  { matiere:'Matière 2', bloc:'Bloc 2', note:10},
  { matiere:'Matière 3', bloc:'Bloc 2', note:10},
  { matiere:'Matière 4', bloc:'Bloc 3', note:10},
  { matiere:'Matière 5', bloc:'Bloc 2', note:10},
  { matiere:'Matière 6', bloc:'Bloc 2', note:10},
  { matiere:'Matière 7', bloc:'Bloc 1', note:10},
  { matiere:'Matière 8', bloc:'Bloc 2', note:10},
]

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
                <TableCell >Matière</TableCell>
                <TableCell align="left">Bloc</TableCell>
                <TableCell align="left">Note</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
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