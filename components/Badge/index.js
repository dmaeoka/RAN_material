import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import badgeStyle from './styles';

function Badge({ ...props }) {
  const { classes, color, children } = props;
  return (
    <span className={`${classes.badge} ${classes[color]}`}>{children}</span>
  );
}

Badge.defaultProps = {
  color: 'gray',
  children: null
};

Badge.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'warning',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  children: PropTypes.node
};

export default withStyles(badgeStyle)(Badge);
