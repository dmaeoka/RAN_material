import withStyles from '@material-ui/core/styles/withStyles';
import SidebarStyle from './styles';
import connect from './store';

const Sidebar = props => {
  const { classes } = props; // eslint-disable-line
  return <div className={classes.section}>Sidebar</div>;
};

export default connect(withStyles(SidebarStyle)(Sidebar));
