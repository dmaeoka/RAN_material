import { connect } from 'react-redux';

const mapStateToProps = () => ({
  example: true
});

const mapDispatchToProps = dispatch => ({
  actions: {
    exampleCall: () => dispatch({ type: 'EXAMPLE' })
  }
});

export default comp => connect(mapStateToProps, mapDispatchToProps)(comp);
