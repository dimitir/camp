import React, { useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { PropTypes_Navbar } from './ContainerNavbar';
import style from './navbar.scss';
import modalName from '../../store/modals/modalNamesList';
import { useParams, useLocation } from 'react-router-dom';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        userImg: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            '&:hover': {
                cursor: 'pointer',
                background: '#ffee2f',
                borderRadius: '50%',
            }
        },
        userImgMenu: {
            width: theme.spacing(7),
            height: theme.spacing(7),
            marginRight: '15px'
        }
    }),
);


const _Login = ({ showModal, user, userLogout }: PropTypes_Navbar) => {

    const classes = useStyles();
    const location = useLocation();

    const handleLogin = () => {
        if (location.pathname) {
            localStorage.setItem('lastLocation', location.pathname);
            console.groupEnd();
        }
        showModal(modalName.SING_UP_ALL)
    }


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userPic');
        userLogout()
        handleClose();
    }


    let imgUserSrc: string;
    try {
        if (user.picture) {
            imgUserSrc = user.picture;
        }
        else {
            imgUserSrc = `https://robohash.org/${'user.firstName'}.png`;
        }
    } catch{
        user = false;
        throw new Error('user is absent');
    }

    const token = localStorage.getItem('token');
    let userPic = localStorage.getItem('userPic')
    if (!userPic) {
        userPic = `https://robohash.org/picture.png`;
    }


    if (user.auth) {
        return (
            <>
                <Avatar className={classes.userImg} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} alt={user.firstName} src={imgUserSrc} />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar className={classes.userImgMenu} src={imgUserSrc} />
                        <div>
                            <Typography variant="body2">{user.firstName}</Typography>
                            <Typography variant="body2">{user.lastName}</Typography>
                            <Typography variant="body2">{user.email}</Typography>
                        </div>
                    </MenuItem>
                    <hr />
                    <MenuItem onClick={handleClose}>My hikes</MenuItem>
                    <MenuItem onClick={handleClose}>Add new</MenuItem>
                    <MenuItem onClick={handleClose}>Favorite</MenuItem>
                    <hr />
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </>

        )
    }


    else {
        return (
            <>
                <ExitToAppIcon
                    className={style.buttonLogin}
                    onClick={() => handleLogin()} />
            </>
        )
    }
}

export default _Login;
