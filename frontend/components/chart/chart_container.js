import { connect } from 'react-redux';
import Chart from './chart.jsx';

const mapStateToProps = ({ data }) => ({
  searchQuery: data.searchQuery,
  data: data.data
});

export default connect(
  mapStateToProps
)(Chart);
