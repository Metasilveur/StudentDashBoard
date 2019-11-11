import Home from './Home';
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

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

// ok

export default function Login() {

  const [form, setValues] = React.useState({
    username: '',
    password: '',
    boolean: true,
    loading: false,
    name: '',
    surname: '',
    filiere: 'Système d\'information',
    absence: '8',
    graph: [],
    mail: [],
    captions: {
      // columns
      Es: 'Estimation and Data Analysis',
      Nc: 'Numerical and combinatorial optimization',
      lp: 'IP Networks',
      Cp: 'Cryptography',
      Vr: 'Virtual Reality'
    },
    data: [                {
                data: {
                  Es: 0.7,
                  Nc: .8,
                  lp: 0.9,
                  Cp: 0.67,
                  Vr: 0.8
                },
                meta: { color: '#58FCEC' }
              },
              {
                data: {
                  Es: 0.5,
                  Nc: 0.5,
                  lp: 0.5,
                  Cp: 0.5,
                  Vr: 0.5
                },
                meta: { color: '#588CEC' }
              }],
  });
   
  

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


          setValues(prev => ({ 
              ...prev,
              boolean: false,
              loading: false,
          }));

      });
   
  }

  function getInfos(){
    var url = "http://127.0.0.1:8081/getStudentinfos/";
    url += form.username;

    var aPromise = fetch(url);
   
    aPromise
      .then(function(response) {
          console.log("OK! Server returns a response object:");
          return response.json();
      })
      .then(function(data){
          console.log(data);
            setValues(prev => ({ 
                ...prev,
                name: data[0],
                surname: data[1],
                filiere: data[2],
            }));

          
      })
      .catch(function(error)  {
          console.log("Noooooo! Something error:");
          console.log(error);

      }); 
  }


  function getGrades(){
    var url = "http://127.0.0.1:8081/getAllGrades/";
    url += form.username;

    var aPromise = fetch(url);
   
    aPromise
      .then(function(response) {
          console.log("OK! Server returns a response object:");
          return response.json();
      })
      .then(function(data){

        console.log(data);

          for (var key in data["Core Program"])
          {
            var obj = { matiere:key, bloc:'Core Program', note:data["Core Program"][key]};
            form.graph.push(obj);
          }
          for (var key in data["Technical Common Core"])
          {
            var obj = { matiere:key, bloc:'Technical Common Core', note:data["Technical Common Core"][key]};
            form.graph.push(obj);
          }
      })
      .catch(function(error)  {
          console.log("Noooooo! Something error:");
          console.log(error);

      }); 
  }

  function getMails(){
    var url = "http://127.0.0.1:8081/getAllMails/";
    url += form.username;

    var aPromise = fetch(url);
   
    aPromise
      .then(function(response) {
          console.log("OK! Server returns a response object:");
          return response.json();
      })
      .then(function(data){
        data.forEach(function(element) {
          var obj = { sender:element[0], head:element[2], content:element[3]};
          form.mail.push(obj);
        });
      })
      .catch(function(error)  {
          console.log("Noooooo! Something error:");
          console.log(error);

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
              onClick={(event) => { doGetTEXT(event); getGrades();getMails();getInfos()}}
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
        <Home email={form.username} 
        name={form.name}
        surname={form.surname}
        filiere={form.filiere}
        absence={form.absence}
        graph={form.graph}
        captions={form.captions}
        data={form.data}
        mail={form.mail}/>
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