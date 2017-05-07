import { connect } from 'react-redux';
import Header from './header.jsx';

const mapStateToProps = ({ data }) => ({
  query: data.query
});

export default connect(
  mapStateToProps
)(Header);
