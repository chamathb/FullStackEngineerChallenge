/**
 * Created by chamathbogahawatta on 06/10/2019.
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import Assessment from '@material-ui/icons/Assessment';
import SpeakerNote from '@material-ui/icons/SpeakerNotes';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const SimpleBottomNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon /> }  component={Link}
                              to='/home' />
      <BottomNavigationAction label="Review" icon={<Assessment />}  component={Link}
                              to='/manage/feedback' />
      <BottomNavigationAction label="Feedback" icon={<SpeakerNote />} component={Link}
                              to='/manage/users' />
    </BottomNavigation>
  );
};

export default SimpleBottomNavigation;