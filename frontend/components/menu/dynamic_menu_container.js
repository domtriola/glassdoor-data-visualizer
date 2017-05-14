import { connect } from 'react-redux';
import DynamicMenu from './dynamic_menu.jsx';
import { updateSearchQuery } from '../../actions/data_actions';

const mapStateToProps = ({ data }) => ({
  searchQuery: data.searchQuery
});

const mapDispatchToProps = dispatch => ({
  updateSearchQuery: searchQuery => dispatch(updateSearchQuery(searchQuery))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicMenu);
