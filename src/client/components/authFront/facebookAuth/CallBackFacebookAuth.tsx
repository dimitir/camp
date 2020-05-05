import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { PropsTypes_CallBack } from './ContainerCallBackFacebookAuth';
import queryString from 'query-string';

const CallBackFacebookAuth: React.FC<PropsTypes_CallBack> = ({ sendCodeToFacebook }: PropsTypes_CallBack) => {
    const location = useLocation();
    const history = useHistory();
    const parsed = queryString.parse(location.search);

    const backToLastLocatin = () => {
        const lastLocation = localStorage.getItem('lastLocation');
        const code = parsed.code;
        sendCodeToFacebook((code as string))
        history.push((lastLocation as string));
    }

    return (
        <>{backToLastLocatin()}</>
    )
}

export default CallBackFacebookAuth