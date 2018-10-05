// /* eslint-disable */
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import LocationOn from '@material-ui/icons/LocationOn';
// core components
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Card from '../Card/Card';
import carouselStyle from './styles';

const SectionCarousel = props => {
  const { classes } = props; // eslint-disable-line
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/static/img/bg.jpg"
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />Yellowstone National
                      Park, United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/static/img/bg2.jpg"
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />Somewhere Beyond,
                      United States
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/static/img/bg3.jpg"
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />Yellowstone National
                      Park, United States
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

export default withStyles(carouselStyle)(SectionCarousel);
