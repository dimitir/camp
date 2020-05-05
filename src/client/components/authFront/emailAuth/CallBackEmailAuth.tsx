import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { PropsTypes_CallBack_Email } from './ContainerCallBackEmailAuth';


const CallBackHendler: React.FC<PropsTypes_CallBack_Email> = ({ manageCallBackEmailAuth }: PropsTypes_CallBack_Email) => {
    const history = useHistory();
    const location = useLocation();
    const parsed = queryString.parse(location.search);
    console.log(parsed.token);
    const backToLastLocation = () => {
        const lastLocation = localStorage.getItem('lastLocation');
        const token = parsed.token;
        manageCallBackEmailAuth((token as string));
        history.push((lastLocation as string));
    }
    return (
        <>
            {backToLastLocation()}
        </>
    )
}

export default CallBackHendler;