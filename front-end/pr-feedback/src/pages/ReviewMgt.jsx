/**
 * Created by chamathbogahawatta on 05/10/2019.
 */
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const ReviewMgt = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container direction="row"
            justify="center"
            alignItems="center">
        <Grid item xs={6}>
          <Typography component="h3" variant="h4" >
            Reviews
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Button variant="outlined" color="secondary"  component={Link} to='/add/review' className={classes.button}>
            Create Review
          </Button>
        </Grid>
      </Grid>
      <CssBaseline />



    </React.Fragment>
  );
};

export default ReviewMgt;