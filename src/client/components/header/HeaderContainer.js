import { connect } from 'react-redux';
import Header from './Header';





const HeaderContainer = connect(
    state => ({ products: 'state.marketCart' }),
    dispatch => ({ dispatch })
)(Header);

export default HeaderContainer;