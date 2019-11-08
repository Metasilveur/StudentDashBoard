import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const width2 = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${width2}px)`,
    marginLeft: width2,
  },
  drawer: {
    width: width2,
    flexShrink: 0,
  },
  drawerPaper: {
    width: width2,
    marginLeft: 240,
    marginTop: 65,

  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },

}));

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

const Dashboard3 = (props) => {

  const classes = useStyles();

  const removeDrawer = () => {
    
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}
            onClick={removeDrawer}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />



            <Table hover className={classes.table} aria-label="simple table">
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



        
      </main>
    </div>
  );
}



export default Dashboard3;