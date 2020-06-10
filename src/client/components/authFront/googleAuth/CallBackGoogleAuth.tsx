import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { PropsTypes_CallBack } from './ContainerCallBackGoogleAuth';


const CallBackHendler: React.FC<PropsTypes_CallBack> = ({ sendCodeToGoogle }: PropsTypes_CallBack) => {
    const history = useHistory();
    const location = useLocation();
    const parsed = queryString.parse(location.search);
   

    const backToLastLocation = () => {
        const lastLocation = localStorage.getItem('lastLocation');
        console.group('auth callback google');
        console.log(parsed);
        console.log(lastLocation);
        console.groupEnd();
        const code = parsed.code;
        sendCodeToGoogle((code as string));
        history.push((lastLocation as string));
    }
    return (
        <>
            {backToLastLocation()}
        </>
    )
}

export default CallBackHendler;