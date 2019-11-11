import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import moment from 'moment';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const Dashboard = (props) => {

  const [values, setValues] = React.useState({
    firstName: 'Robert',
    lastName: 'Bui',
    email: 'rbui@et.esiea.fr',
    phone: 'Non',
    state: 'Ivry-sur-Seine',
    country: 'France'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          <Card className={classes.root} >
            <CardContent>
              <div className={classes.details}>
                <div>
                  <Typography
                    gutterBottom
                    variant="h5"
                  >
                    {props.name+" "+props.surname}
                  </Typography>
                  <Typography
                    className={classes.locationText}
                    color="textSecondary"
                    variant="body1"
                  >
                    Ivry-sur-Seine, Paris
                  </Typography>
                  <Typography
                    className={classes.dateText}
                    color="textSecondary"
                    variant="body1"
                  >
                    {moment().format('hh:mm A')} (GTM-7)
                  </Typography>
                </div>
                <Avatar
                  className={classes.avatar}
                  src={'https://raw.githubusercontent.com/Metasilveur/Api_Mobile/master/'+ props.surname +'.jpg'}
                />
              </div>
            </CardContent>
            <Divider />
            <CardActions>
              <Button
                className={classes.uploadButton}
                color="primary"
                variant="text"
              >
                Upload picture
              </Button>
              <Button variant="text">Remove picture</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <Card
            className={classes.root}
          >
            <form
              autoComplete="off"
              noValidate
            >
              <CardHeader
                subheader="The information can be edited"
                title="Profile"
              />
              <Divider />
              <CardContent>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      helperText="Please specify the first name"
                      label="First name"
                      margin="dense"
                      name="firstName"
                      onChange={handleChange}
                      required
                      value={props.name}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Last name"
                      margin="dense"
                      name="lastName"
                      onChange={handleChange}
                      required
                      value={props.surname}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Email Address"
                      margin="dense"
                      name="email"
                      onChange={handleChange}
                      required
                      value={values.email}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Phone Number"
                      margin="dense"
                      name="phone"
                      onChange={handleChange}
                      type="number"
                      value={values.phone}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Country"
                      margin="dense"
                      name="country"
                      onChange={handleChange}
                      required
                      value={values.country}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  color="primary"
                  variant="contained"
                >
                  Save details
                </Button>
              </CardActions>
            </form>
          </Card>

        </Grid>
      </Grid>
    </div>
          )
}

export default Dashboard;