import NoSSR from 'react-no-ssr';
import Head from 'next/head';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Button from '../components/CustomButtons';
import HeaderLinks from '../components/Header/HeaderLinks';
import Parallax from '../components/Parallax';
import SectionProduct from '../components/SectionProduct';
import SectionTeam from '../components/SectionTeam';
import SectionWork from '../components/SectionWork';
import landingPageStyle from '../assets/jss/material-kit-react/views/landingPage';
import withData from '../libraries/withData';
import withRoot from '../libraries/withRoot';

const dashboardRoutes = [];

function LandingPage({ ...props }) {
  const { classes, ...rest } = props; // eslint-disable-line
  return (
    <App>
      <Head>
        <title>landing-page</title>
      </Head>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
        {...rest}
      />
      <NoSSR>
        <Parallax filter image="/static/img/landing-bg.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, thats why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </NoSSR>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <SectionTeam />
          <SectionWork />
        </div>
      </div>
      <Footer />
    </App>
  );
}

export default withData(withRoot(withStyles(landingPageStyle)(LandingPage)));
