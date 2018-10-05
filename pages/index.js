import React from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import NoSSR from 'react-no-ssr';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Parallax from '../components/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Header from '../components/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import Footer from '../components/Footer';
import SectionBasics from '../components/SectionBasics';
import SectionNavbars from '../components/SectionNavbars';
import SectionTabs from '../components/SectionTabs';
import SectionPills from '../components/SectionPills';
import SectionNotifications from '../components/SectionNotifications';
import SectionTypography from '../components/SectionTypography';
import SectionJavascript from '../components/SectionJavascript';
import SectionCarousel from '../components/SectionCarousel';
import SectionLogin from '../components/SectionLogin';
import withData from '../libraries/withData';
import withRoot from '../libraries/withRoot';
import indexStyle from './styles';

class Index extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <Helmet>
          <title>index</title>
        </Helmet>
        <Header
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
        />
        <NoSSR>
          <Parallax image="/static/img/bg4.jpg">
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>Material Kit React.</h1>
                    <h3 className={classes.subtitle}>
                      A Badass Material-UI Kit based on Material Design.
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        </NoSSR>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <Dialog open={open} onClose={this.handleClose}>
                  <DialogTitle>Super Secret Password</DialogTitle>
                  <DialogContent>
                    <DialogContentText>1-2-3-4-5</DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button color="primary" onClick={this.handleClose}>
                      OK
                    </Button>
                  </DialogActions>
                </Dialog>
                <Typography variant="display1" gutterBottom>
                  Material-UI
                </Typography>
                <Typography variant="subheading" gutterBottom>
                  example project
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleClick}
                >
                  Super Secret Password
                </Button>
              </GridItem>
            </GridContainer>
          </div>
          <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionLogin />
        </div>
        <Footer />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withData(withRoot(withStyles(indexStyle)(Index)));
