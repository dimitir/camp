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


import Grid from '@material-ui/core/Grid';

import HikesListIcon from '../pages/_icons/hikes/ListHikesIcon';
import MyHikesIcon from '../pages/_icons/hikes/MyHikesIcon';
import CreateHikeIcon from '../pages/_icons/hikes/CreateHikeIcon';
import BlogIcon from '../pages/_icons/navbar/BlogIcon';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';




const Navbar: React.FC<PropTypes_Navbar> = ({ showModal, user, userLogout }: PropTypes_Navbar) => {

    const linkVariant = 'body2';
    const iconSubscribe = 'body2';
    return (
        <>
            <CssBaseline />
            <AppBar className={style.appBar} position="static" color="default" elevation={0} >
                <Toolbar className={style.toolBar} >
                    <Typography variant="h6" color="inherit" noWrap  >
                        GoHome
                   </Typography>
                    {/*  <div className={style.novLinks}>

                        <Link
                            variant={linkVariant}
                            color="textPrimary" href="/hikes/list"
                            className={style.link}>
                            Hikes
                        </Link>
                        <Link
                            variant={linkVariant}
                            color="textPrimary"
                            href="#"
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
                    <div className={style.navbarLogin}>
                        <_Login
                            showModal={showModal}
                            user={user}
                            userLogout={userLogout}
                        />
                    </div> */}

                    <BottomNavigation
                        className={style.novLinks}>

                        <BottomNavigationAction value='0' href="/hikes/list"
                            icon={<HikesListIcon width='30' />} />

                        <BottomNavigationAction value='2'
                            icon={<MyHikesIcon width='30' />} />

                        <BottomNavigationAction value='1' href="/hikes/create"
                            icon={<CreateHikeIcon width='30' />} />
                            
                        <BottomNavigationAction value='1' href="/hikes/create"
                            icon={<BlogIcon width='30' />} />


                    </BottomNavigation>

                    <div className={style.navbarLogin}>
                        <_Login
                            showModal={showModal}
                            user={user}
                            userLogout={userLogout}
                        />
                    </div>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;