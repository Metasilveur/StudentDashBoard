import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Bar } from 'react-chartjs-2';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { data, options } from '../chart';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button
} from '@material-ui/core';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const useStyles = makeStyles(theme => ({
  card: {
    marginLeft: theme.spacing(2),
    height: '100%',
  },
  title: {
    fontWeight: 700
  },
  avatarP: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    height: 56,
    width: 56
  },
  progress: {
    marginTop: theme.spacing(3)
  },
    chartContainer: {
    height: 400,
    position: 'relative'
  },
  root: {
    padding: theme.spacing(4),
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.primary.contrastText
  },
  differenceValue: {
    color: theme.palette.primary.contrastText,
    marginRight: theme.spacing(1)
  }
}));


const Dashboard2 = (props) => {

  const classes = useStyles();

  return(
          <Grid
          container
          spacing={4}
          >

          <Grid item
            lg={3}
            sm={6}
            xl={3}
            xs={12} >
            <Card className={classes.card} >

            <CardContent>
                    <Grid
                      container
                      justify="space-between"
                    >
                      <Grid item>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                          variant="body2"
                        >
                          ABSENCE
                        </Typography>
                        <Typography variant="h3">{Math.round((parseInt(props.absence)/60)*100) + "%"}</Typography>
                      </Grid>
                      <Grid item>
                        <Avatar className={classes.avatarP}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 18 18"><path d="M9 1.03c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM10 13H8v-2h2v2zm0-3H8V5h2v5z"/></svg>
                        </Avatar>

                      </Grid>
                    </Grid>
                    <LinearProgress
                      className={classes.progress}
                      value={Math.round((parseInt(props.absence)/60)*100)}
                      variant="determinate"
                    />
                  </CardContent>

            </Card>

           </Grid>

          <Grid item
            lg={3}
            sm={6}
            xl={3}
            xs={12}  >
            <Card className={classes.card} >
              <CardContent>

                  <Grid
                    container
                    justify="space-between"
                  >
                    <Grid item>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        UNREAD MAILS
                      </Typography>
                      <Typography variant="h3">3</Typography>
                    </Grid>
                    <Grid item>
                      <Avatar className={classes.avatar}>
                        <MailIcon className={classes.icon} />
                      </Avatar>
                    </Grid>
                  </Grid>



              </CardContent>
            </Card>

           </Grid>

          <Grid item
            lg={3}
            sm={6}
            xl={3}
            xs={12}  >
            <Card className={classes.card} >
              <CardContent>

                  <Grid
                    container
                    justify="space-between"
                  >
                    <Grid item>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                        variant="body2"
                      >
                        CURRENT PROJECTS
                      </Typography>
                      <Typography variant="h3">2</Typography>
                    </Grid>
                    <Grid item>
                      <Avatar className={classes.avatar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/></svg>
                      </Avatar>
                    </Grid>
                  </Grid>

              

              </CardContent>
            </Card>

           </Grid>


          <Grid item
            lg={3}
            sm={6}
            xl={3}
            xs={12}  >
            <Card className={classes.card} >

            <CardContent>
                    <Grid
                      container
                      justify="space-between"
                    >
                      <Grid item>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                          variant="body2"
                        >
                          QUIZZ STATS
                        </Typography>
                        <Typography variant="h3">85%</Typography>
                      </Grid>
                      <Grid item>
                        <Avatar className={classes.avatarP}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
                        </Avatar>

                      </Grid>
                    </Grid>
                    <LinearProgress
                      className={classes.progress}
                      value={64}
                      variant="determinate"
                    />
                  </CardContent>

            </Card>

           </Grid>

          <Grid item
          lg={6}
          md={12}
          xl={9}
          xs={12}  >
            <Card className={classes.card} >
              <CardContent>

                <CardHeader
                      action={
                        <Button
                          size="small"
                          variant="text"
                        >
                          Last 7 days <ArrowDropDownIcon />
                        </Button>
                      }
                      title="Project organization"
                    />
                    <Divider />
                    <CardContent>
                      <div className={classes.chartContainer}>
                        <Bar
                          data={data}
                          options={options}
                        />
                      </div>
                    </CardContent>
              </CardContent>
            </Card>

           </Grid>


          <Grid item
          lg={6}
          md={12}
          xl={9}
          xs={12}  >
            <Card className={classes.card} >

                <CardHeader
                      title="Grades charts"
                    />
                     <Divider />

              <CardContent>

        <RadarChart
            captions={props.captions}
            data={props.data}
            size={400}
          />

              </CardContent>
            </Card>

           </Grid>


          </Grid>
          )
}

export default Dashboard2;