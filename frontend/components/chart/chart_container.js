import { connect } from 'react-redux';
import Chart from './chart.jsx';

const mapStateToProps = ({ data }) => ({
  searchQuery: data.searchQuery
});

export default connect(
  mapStateToProps
)(Chart);
