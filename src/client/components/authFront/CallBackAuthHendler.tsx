import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { PropsTypes_CallBack } from './ContainerCallBackAuthHendler';


const CallBackHendler: React.FC<PropsTypes_CallBack> = ({ sendCodeToGoogle }: PropsTypes_CallBack) => {
    const history = useHistory();
    const location = useLocation();
    const parsed = queryString.parse(location.search);
    console.log(parsed);

    const backToLastLocation = () => {
        const lastLocation = localStorage.getItem('lastLocation');
        console.log(lastLocation);
        console.log(sendCodeToGoogle);
        const code = parsed.code;
        sendCodeToGoogle((code as string));
        history.push((lastLocation as string));
        console.log(code);
    }
    return (
        <>
            <p>Hi</p>
            {backToLastLocation()}
        </>
    )
}

export default CallBackHendler;