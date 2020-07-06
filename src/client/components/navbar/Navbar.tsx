import React from 'react';
import { useForm } from "react-hook-form";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';

import { PropTypes_Navbar } from './ContainerNavbar';
import style from './navbar.scss';
import modalName from '../../store/modals/modalNamesList';
import { useParams, useLocation } from 'react-router-dom';
import _Login from './_Login';


import Grid from '@material-ui/core/Grid';

import HikesIcon from '../pages/_icons/navbar/HikesIcon';
import GoingIcon from '../pages/_icons/navbar/GoingIcon';
import TrailsIcon from '../pages/_icons/navbar/TrailsIcon';
import BlogIcon from '../pages/_icons/navbar/BlogIcon';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';


const Navbar: React.FC<PropTypes_Navbar> = ({ showModal, user, userLogout }: PropTypes_Navbar) => {

    /*  const [valueNav, setValueNav] = React.useState('recents');
 
     const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
         setValueNav(newValue);
     }; */

    const widthIcon = '25'

    return (
        <>
            <CssBaseline />
            <AppBar className={style.appBar} position="static" color="default" elevation={0} >
                <Toolbar className={style.toolBar} >
                    <Link to='/' className={style.logo} key='logo'><Typography variant="h6" color="inherit" noWrap  >
                        GoHome
                   </Typography></Link>


                    <BottomNavigation
                        className={style.novLinks}
                    >
                        <BottomNavigationAction value="hikes"
                            icon={<Link to='/' key='hikes'><HikesIcon width={widthIcon} /></Link>} />

                        <BottomNavigationAction value="going"
                            icon={<Link to='/going' key='going'><GoingIcon width={widthIcon} /></Link>} />

                        <BottomNavigationAction value="trails"
                            icon={<Link to='/trails' key='trails'><TrailsIcon width='23' /></Link>} />

                        <BottomNavigationAction value="blog"
                            icon={<Link to='/blog' key='blog'><BlogIcon width={widthIcon} /></Link>} />

                    </BottomNavigation>

                    <div className={style.navbarLogin}>
                        <_Login
                            showModal={showModal}
                            user={user}
                            userLogout={userLogout}
                        />
                    </div>

                </Toolbar >
            </AppBar >
        </>
    )
}

export default Navbar;