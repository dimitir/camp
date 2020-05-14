import React from 'react';
import { useForm } from "react-hook-form";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { PropTypes_Navbar } from './ContainerNavbar';
import style from './navbar.scss';
import modalName from '../../store/modals/modalNamesList';
import { useParams, useLocation } from 'react-router-dom';
import _Login from './_Login';





const Navbar: React.FC<PropTypes_Navbar> = ({ showModal, user, userLogout }: PropTypes_Navbar) => {

    const linkVariant = 'body2';
    return (
        <>
            <CssBaseline />
            <AppBar className={style.appBar} position="static" color="default" elevation={0} >
                <Toolbar className={style.toolBar} >
                    <Typography variant="h6" color="inherit" noWrap  >
                        GoHome
                   </Typography>
                    <div className={style.novLinks}>

                        <Link
                            variant={linkVariant}
                            color="textPrimary" href="#"
                            className={style.link}>
                            Hikes
                        </Link>
                        <Link
                            variant={linkVariant}
                            color="textPrimary"
                            href="/trails/create"
                            className={style.link}>
                            Trails
                       </Link>
                        <Link
                            variant={linkVariant}
                            color="textPrimary" href="#"
                            className={style.link}>
                            Info
                        </Link>
                        <Link
                            variant={linkVariant}
                            color="textPrimary" href="#"
                            className={style.link}>
                            We
                        </Link>
                    </div>
                    <_Login
                        showModal={showModal}
                        user={user}
                        userLogout={userLogout}
                    />

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;