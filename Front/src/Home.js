import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Bob from './bob.png';
import Back from './sidebar-4.jpg';
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";
import {
  Divider
} from '@material-ui/core';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import Dashboard3 from './Dashboard3';
import Dashboard4 from './Dashboard4';
import Image from 'material-ui-image'
var drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `url(${Back})`,

  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
    avatar: {

    margin: 10,
    width: 60,
    height: 60,
    marginLeft: 40,
    marginTop: 25,
  },
    text: {
    marginLeft: 40,
  },
    textB: {
    marginLeft: 40,
    marginBottom: 25,
  },
  list: {
    marginTop: theme.spacing(2), 
  },
  icon: {
    height: 32,
    width: 32
  },
  actions: {
    justifyContent: 'flex-end'
  },
  selected: {
    color: 'withe',
  },
}));


const Home = (props) => {
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };



  return (



    <Router>

    <div className={classes.root}>

      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ background: '#2E3B55' }} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography  noWrap>
            Student DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <div className={classes.drawerHeader}>

        <Grid container justify="center" alignItems="center" direction="column">
          <Avatar alt={props.surname}  src={'https://raw.githubusercontent.com/Metasilveur/Api_Mobile/master/'+props.surname+'.jpg'} className={classes.avatar} />
          <Typography style={{ color: '#FFFFFF' }}  className={classes.text} >
          {props.name+" "+props.surname}
          </Typography>
          <Typography style={{ color: '#FFFFFF' }}  className={classes.textB} >
          4th Years
          </Typography>
        </Grid>   

          <IconButton style={{ color: '#FFFFFF' }} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>

        </div>
        <Divider />

      <List className={classes.list} >

            <Link to="/dash1" style={{ textDecoration: 'none' , color:'white'}}>
            <ListItem button key="DashBoard">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" ><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
              <ListItemText style={{ color: '#FFFFFF', marginLeft: 25  }} primary="DashBoard" />
            </ListItem>
            </Link>

            <Link to="/dash2" style={{ textDecoration: 'none' , color:'white'}}>
            <ListItem button key="Grades">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> 
              <ListItemText style={{ color: '#FFFFFF', marginLeft: 25 }} primary="Grades" />
            </ListItem>
            </Link>

            <Link to="/dash3" style={{ textDecoration: 'none' , color:'white'}}>
            <ListItem button key="Email">
              <MailIcon />  
              <ListItemText style={{ color: '#FFFFFF' , marginLeft: 25 }} primary="Email" />
            </ListItem>
            </Link>

            <Link to="/dash4" style={{ textDecoration: 'none' , color:'white'}}>
            <ListItem button key="Profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg>
              <ListItemText style={{ color: '#FFFFFF' , marginLeft: 25 }} primary="Profile" />
            </ListItem>
            </Link>

        </List>

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />


        <Grid>
          <Switch>

          <Route path="/dash1" render={() => <Dashboard2 absence={props.absence} captions={props.captions} data={props.data} />} />
          <Route path="/dash2" render={() => <Dashboard4 graph={props.graph}/>} />
          <Route path="/dash3" render={() => <Dashboard3 user={props.email} mail={props.mail}/>}/>
          <Route path="/dash4" render={() => <Dashboard surname={props.surname} name={props.name}/>}/>

          </Switch>
          </Grid>
      </main>

    </div>

    

    </Router>

  );
}


export default Home;