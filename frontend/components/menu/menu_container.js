import { connect } from 'react-redux';
import Menu from './menu.jsx';
import { updateDisplayType } from '../../actions/data_actions';

const mapStateToProps = ({ data }) => ({
  query: data.query,
  displayType: data.displayType
});

const mapDispatchToProps = dispatch => ({
  updateDisplayType: displayType => dispatch(updateDisplayType(displayType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
