import { connect } from 'react-redux';
import Museum from './index';
import getMuseum from './action';

const mapStateToProps = state => ({
  status: state.museum.status,
  count: state.museum.count,
  data: state.museum.data
});

const mapDispatchToProps = dispatch => ({
  getMuseum: () => dispatch(getMuseum())
});

export default connect(mapStateToProps, mapDispatchToProps)(Museum);
