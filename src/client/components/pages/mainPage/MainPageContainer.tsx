import MainPage from './MainPage';
import { connect, ConnectedProps } from 'react-redux';

import { Dispatch } from 'redux';


const mapDispatchToProps = (dispatch: Dispatch) => ({

})


const connector = connect(
    null,
    mapDispatchToProps
);


export type MainPagePropsType = ConnectedProps<typeof connector>;

/* export type Props = PropsFromRedux & {
    backgroundColor: string
} */

export default connector(MainPage);