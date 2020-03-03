import React from 'react';
import { useForm } from "react-hook-form";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import style from './navbar.module.scss';

const MainPage = () => {

    return (
        <>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} >
                <Toolbar className={style.appBar} >
                    <Typography variant="h6" color="inherit" noWrap  >
                        Logo
                   </Typography>
                    <div className={style.novLinks}>

                        <Link variant="button" color="textPrimary" href="#" className={style.link}>
                            Trips
                        </Link>
                        <Link variant="button" color="textPrimary" href="#" className={style.link}>
                            Blog
                       </Link>
                        <Link variant="button" color="textPrimary" href="#" className={style.link}>
                            Info
                        </Link>

                        <Button href="#" color="primary" variant="outlined" className={style.link}>
                            Login
                       </Button>
                    </div>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default MainPage;