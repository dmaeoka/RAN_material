// /*eslint-disable*/
import React from 'react';
import Link from 'next/link';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
import { List, ListItem, withStyles } from '@material-ui/core';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import footerStyle from './styles';

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link href="https://www.creative-tim.com">
                <a className={classes.block}>Creative Tim</a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="https://www.creative-tim.com/presentation">
                <a className={classes.block}>About us</a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="http://blog.creative-tim.com">
                <a className={classes.block}>Blog</a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="https://www.creative-tim.com/license">
                <a className={classes.block}>Licenses</a>
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{' '}
          <Favorite className={classes.icon} /> by{' '}
          <a href="https://www.creative-tim.com" className={aClasses}>
            Creative Tim
          </a>{' '}
          for a better web.
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  whiteFont: false
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
