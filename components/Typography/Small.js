import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import typographyStyle from './styles';

function Small({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={`${classes.defaultFontStyle} ${classes.smallText}`}>
      {children}
    </div>
  );
}

Small.defaultProps = {
  children: null
};

Small.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};

export default withStyles(typographyStyle)(Small);
