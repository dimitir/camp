import { connect } from 'react-redux';
import Body from './Body';



const mapStateProps = () => (
    {
        products: '2',
    }
)



const mapDispatchToProps = (dispatch) => (
    {
        dispatch: dispatch,
    }
)


export default connect(mapStateProps, mapDispatchToProps)(Body);
