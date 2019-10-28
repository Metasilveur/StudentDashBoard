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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import LinearProgress from '@material-ui/core/LinearProgress';
import Bob from './bob.png';
import Back from './sidebar-4.jpg';
import { Bar } from 'react-chartjs-2';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { data, options } from './chart';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@material-ui/core';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

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

const datas = [
  {
    subject: 'Math', A: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Chinese', A: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'English', A: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Geography', A: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Physics', A: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'History', A: 65, B: 85, fullMark: 150,
  },
];

const Dashboard2 = () => {
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
                          FROMAGE
                        </Typography>
                        <Typography variant="h3">35%</Typography>
                      </Grid>
                      <Grid item>
                        <Avatar className={classes.avatarP}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 18 18"><path d="M.5 16h17L9 1 .5 16zm9.5-2H8v-2h2v2zm0-3H8V7h2v4z"/></svg>
                        </Avatar>

                      </Grid>
                    </Grid>
                    <LinearProgress
                      className={classes.progress}
                      value={35}
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
                      <Typography variant="h3">25</Typography>
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
                      <Typography variant="h3">3</Typography>
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
                        <Typography variant="h3">64%</Typography>
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
                      title="Grades Graph"
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
          md={6}
          xl={3}
          xs={12}  >
            <Card className={classes.card} >

                <CardHeader
                      title="Grades charts"
                    />
                     <Divider />

              <CardContent>

                <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={datas}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Robert" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Radar name="Average grades" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Legend />
                </RadarChart>

              </CardContent>
            </Card>

           </Grid>


          </Grid>
          )
}

export default Dashboard2;