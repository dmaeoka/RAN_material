import Head from 'next/head';
import withStyles from '@material-ui/core/styles/withStyles';
import App from '../components/App';
import Sidebar from '../components/Sidebar';
import withData from '../libraries/withData';
import withRoot from '../libraries/withRoot';

const DashboardStyle = {
  container: {
    zIndex: '12',
    color: '#FFFFFF'
  },
  title: {
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  subtitle: {
    fontSize: '1.313rem',
    maxWidth: '500px',
    margin: '10px auto 0'
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  }
};

const Dashboard = (
  props // eslint-disable-line
) => (
  <App>
    <Head>
      <title>dashboard</title>
    </Head>
    <div>
      <Sidebar />
      <h1>dashboard</h1>
      <p>HELLO WORLD!</p>
    </div>
  </App>
);

export default withData(withRoot(withStyles(DashboardStyle)(Dashboard)));
