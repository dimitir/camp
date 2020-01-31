import { connect } from 'react-redux';
import Modals from './Modals';

const ModalContainer = connect(
    function mapStateToProps(state) {
        return {
            modals: state.modals
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            dispatch
        }
    }
)(Modals);

export default ModalContainer;