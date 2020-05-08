import React from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { PropsTypes_SingAll } from './ContainerModalsCreator';

// import style from './styleModalCreator.scss';
import modalNamesList from '../../store/modals/modalNamesList';
import googleLoginUrl from '../authFront/googleAuth/googleLoginUrl';
import facebookLoginUrl from '../authFront/facebookAuth/facebookLoginUrl';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonLink: {
            textTransform: 'none',
            marginBottom: '10px',
            width: '250px'
        },
        buttonLinkSpan: {
            marginLeft: '60px',
            display: 'flex',
            justifyContent: 'flex - start',
            '&:hover': {
                textDecoration: 'none',
            }
        },
        textButton: {
            marginTop: '3px',
            marginLeft: '15px',
            width: '200px'
        }
    }),
);


const _SingAll = ({ handleShowModal }: PropsTypes_SingAll) => {
    const classes = useStyles();
    return (
        <>
            <Button href={googleLoginUrl} variant="outlined" color="primary"
                className={classes.buttonLink}>
                <span className={classes.buttonLinkSpan}>
                    <i className="fab fa-google fa-2x"></i>
                    <Typography variant="body2" gutterBottom align="left" display='block' className={classes.textButton}>
                        Sign in with Google</Typography></span>
            </Button>
            <Button
                href={facebookLoginUrl}
                variant="outlined" color="primary"
                className={classes.buttonLink}>
                <span className={classes.buttonLinkSpan}>
                    <i className="fab fa-facebook-square fa-2x"></i>
                    <Typography variant="body2" gutterBottom align="left" display='block' className={classes.textButton}>
                        Sign in with Facebook</Typography></span>
            </Button>
            <Button variant="outlined" color="primary"
                onClick={() => handleShowModal(modalNamesList.SING_UP_EMAIL)}
                className={classes.buttonLink}>
                <span className={classes.buttonLinkSpan}>
                    <i className="far fa-envelope fa-2x"></i>
                    <Typography gutterBottom align="left" variant="body2" display='block' className={classes.textButton}>
                        Sign up with email</Typography></span>
            </Button>
        </>
    )
}

export default _SingAll;