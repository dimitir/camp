import React from 'react';
import { useForm } from "react-hook-form";

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { PropTypes_Navbar } from './NavbarContainer';
import style from './navbar.scss';
import modalName from '../../store/modals/modalNameConstants';

const Navbar: React.FC<PropTypes_Navbar> = ({ openModal }: PropTypes_Navbar) => {

    const test = () => {
        console.log('testik');
    }

    return (
        <>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} >
                <Toolbar className={style.appBar} >
                    <Typography variant="h6" color="inherit" noWrap  >
                        Logo
                   </Typography>
                    <div className={style.novLinks}>

                        <Link
                            variant="button"
                            color="textPrimary" href="#"
                            className={style.link}>
                            Trips
                        </Link>
                        <Link
                            variant="button"
                            color="textPrimary"
                            href="#"
                            className={style.link}>
                            Blog
                       </Link>
                        <Link variant="button" color="textPrimary" href="#"
                            className={style.link}>
                            Info
                        </Link>

                        <Button
                            href="#"
                            color="primary"
                            variant="outlined"
                            className={style.link} onClick={() => openModal(modalName.SING_IN_NAME)}>
                            Login
                       </Button>
                    </div>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;