import { connect } from 'react-redux';
import Museum from './index';

const mapStateToProps = state => ({
  status: state.museum.status,
  count: state.museum.count,
  data: state.museum.data
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Museum);
