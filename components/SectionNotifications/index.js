import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import InfoOutline from '@material-ui/icons/InfoOutline';
import Check from '@material-ui/icons/Check';
import Warning from '@material-ui/icons/Warning';
import SnackbarContent from '../Snackbar';
import Clearfix from '../Clearfix';
import notificationsStyles from './styles';

const SectionNotifications = props => {
  const { classes } = props; // eslint-disable-line
  return (
    <div className={classes.section} id="notifications">
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>Notifications</h3>
        </div>
      </div>
      <SnackbarContent
        message={
          <span>
            <b>INFO ALERT:</b> Youve got some friends nearby, stop looking at
            your phone and find them...
          </span>
        }
        close
        color="info"
        icon={InfoOutline}
      />
      <SnackbarContent
        message={
          <span>
            <b>SUCCESS ALERT:</b> Youve got some friends nearby, stop looking at
            your phone and find them...
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      <SnackbarContent
        message={
          <span>
            <b>WARNING ALERT:</b> Youve got some friends nearby, stop looking at
            your phone and find them...
          </span>
        }
        close
        color="warning"
        icon={Warning}
      />
      <SnackbarContent
        message={
          <span>
            <b>DANGER ALERT:</b> Youve got some friends nearby, stop looking at
            your phone and find them...
          </span>
        }
        close
        color="danger"
        icon={InfoOutline}
      />
      <Clearfix />
    </div>
  );
};

export default withStyles(notificationsStyles)(SectionNotifications);
