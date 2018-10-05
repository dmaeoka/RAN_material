// /* eslint-disable */
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Button from '../CustomButtons';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardFooter from '../Card/CardFooter';

import SectionTeamStyle from './styles';

const SectionTeam = props => {
  const { classes } = props; // eslint-disable-line
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card plain>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img
                src="/static/img/faces/avatar.jpg"
                alt="..."
                className={imageClasses}
              />
            </GridItem>
            <h4 className={classes.cardTitle}>
              Gigi Hadid
              <br />
              <small className={classes.smallTitle}>Model</small>
            </h4>
            <CardBody>
              <p className={classes.description}>
                You can write here details about one of your team members. You
                can give more details about what they do. Feel free to add some{' '}
                <a href="#pablo">links</a> for people to be able to follow them
                outside the site.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={`${classes.socials} fab fa-twitter`} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={`${classes.socials} fab fa-instagram`} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={`${classes.socials} fab fa-facebook`} />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card plain>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img
                src="/static/img/faces/christian.jpg"
                alt="..."
                className={imageClasses}
              />
            </GridItem>
            <h4 className={classes.cardTitle}>
              Christian Louboutin
              <br />
              <small className={classes.smallTitle}>Designer</small>
            </h4>
            <CardBody>
              <p className={classes.description}>
                You can write here details about one of your team members. You
                can give more details about what they do. Feel free to add some{' '}
                <a href="#pablo">links</a> for people to be able to follow them
                outside the site.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={`${classes.socials} fab fa-twitter`} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={`${classes.socials} fab fa-linkedin`} />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card plain>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img
                src="/static/img/faces/kendall.jpg"
                alt="..."
                className={imageClasses}
              />
            </GridItem>
            <h4 className={classes.cardTitle}>
              Kendall Jenner
              <br />
              <small className={classes.smallTitle}>Model</small>
            </h4>
            <CardBody>
              <p className={classes.description}>
                You can write here details about one of your team members. You
                can give more details about what they do. Feel free to add some{' '}
                <a href="#pablo">links</a> for people to be able to follow them
                outside the site.
              </p>
            </CardBody>
            <CardFooter className={classes.justifyCenter}>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={`${classes.socials} fab fa-twitter`} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={`${classes.socials} fab fa-instagram`} />
              </Button>
              <Button justIcon color="transparent" className={classes.margin5}>
                <i className={`${classes.socials} fab fa-facebook`} />
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default withStyles(SectionTeamStyle)(SectionTeam);
