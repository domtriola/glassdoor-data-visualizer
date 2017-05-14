import { connect } from 'react-redux';
import DynamicMenu from './dynamic_menu.jsx';
import { updateSearchQuery, fetchData } from '../../actions/data_actions';

const mapStateToProps = ({ data }) => ({
  searchQuery: data.searchQuery
});

const mapDispatchToProps = dispatch => ({
  updateSearchQuery: searchQuery => dispatch(updateSearchQuery(searchQuery)),
  fetchData: query => dispatch(fetchData(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicMenu);
