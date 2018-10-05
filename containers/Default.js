import Head from 'next/head';
import PropTypes from 'prop-types';
import App from '../components/App';

const Default = props => (
  <App>
    <Head>
      <title>{props.title !== '' ? props.title : ''}</title>
    </Head>
    {props.children}
  </App>
);

Default.propTypes = {
  title: PropTypes.string,
  url: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

Default.defaultProps = {
  title: ''
};

export default Default;
