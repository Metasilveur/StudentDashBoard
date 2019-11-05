import Home from './Home';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  progress: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));



export default function Login() {

  const [form, setValues] = React.useState({
    username: '',
    password: '',
    boolean: true,
    loading: false,
    name: 'Robert',
    surname: 'Bui',
    filiere: 'Système d\'information',
    graph: [],
    gurades: [],
  });

  for(var i = 0; i < 5; i++){
    var obj = { matiere:'Math', bloc:'Core Program', note:18};
    var obj1 =  { subject: 'Math', A: 15, B: 10, fullMark: 20};
    form.gurades.push(obj);
    form.graph.push(obj1);
  }

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  function doGetTEXT()  {

    var url = "http://127.0.0.1:8081/authentification/";

    url += form.username + "/" + form.password;

    var aPromise = fetch(url);

    setValues(prev => ({ 
        ...prev,
        loading: true,
    }));
   
    aPromise
      .then(function(response) {
          console.log("OK! Server returns a response object:");
          return response.text();
      })
      .then(function(data){
          console.log(data);

          if(data === "OK"){

            setValues(prev => ({ 
                ...prev,
                boolean: false,
            }));

          }
          else if(data === "PWD"){
            alert("Bad password !");
    setValues(prev => ({ 
              ...prev,
              loading: false,
          }));

          }
          else if(data === "EMAIL"){
            alert("Bad email !");
    setValues(prev => ({ 
              ...prev,
              loading: false,
          }));
          }

          console.log(url);

      })
      .catch(function(error)  {
          console.log("Noooooo! Something error:");
          console.log(error);
          //alert("Error ! please check your internet connection or try later");


          setValues(prev => ({ 
              ...prev,
              //boolean: false,
              loading: false,
          }));

      });
   
  }

  function loading() {
    if(form.loading === true){
      return(
        <CircularProgress className={classes.progress} />
        );
    }
  }

  function rendering() {
    if(form.boolean === true){
      return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Student Dashboard
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="username"
              autoFocus
              value={form.username}
              onChange={updateField}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={form.password}
              onChange={updateField}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={doGetTEXT}
            >
              Login
            </Button>
          </form>
{loading()}
        </div>
      </Container>  
        );
    }
    else{
      return(
        <Home email={form.username} />
        );
    }
  }


  const classes = useStyles();

  return (
    <div>
    {rendering()}
    </div>
  );
}
//{rendering()}