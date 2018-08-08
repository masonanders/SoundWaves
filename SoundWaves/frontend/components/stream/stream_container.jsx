import { connect } from 'react-redux';
import SplashShow from './stream_show';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  unknown: 'idk'
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashShow);
