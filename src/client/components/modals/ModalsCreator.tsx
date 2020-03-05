import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { PropsTypes_Modal } from './ContainerModalsCreator';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';
import style from './modalCreator.scss';



/* const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      backgroundColor: 'rgba(250, 250, 250, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // outline: 'none',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alingItem: 'center',
      borderRadius: '5px',
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      boxShadow: ' 0px 2px 5px 0px rgba(201,219,247,1);'
    },
  }),
); */

const TransitionsModal: React.FC<PropsTypes_Modal> = ({ open, handleClose }: PropsTypes_Modal) => {
  // const classes = useStyles();
  const test = 0;
  switch (test) {
    case 4:
      return (
        <>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={style.modal}
            open={true}
            hideBackdrop
            onClose={() => handleClose()}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={true}>
              <div className={style.paper}>
                <h2 id="transition-modal-title">Go to adventure</h2>
                <p id="transition-modal-description" className={style.descriptionTitle} >react-transition-group animates me.</p>
                <Button variant="outlined" color="primary" href="#outlined-buttons"
                  className={style.buttonLink}>
                  Sign up with Google
                </Button>
                <Button variant="outlined" disableRipple color="primary" href="#outlined-buttons"
                  className={style.buttonLink}>
                  Sign up with Facebook
                </Button>
                <Button variant="text" color="primary" href="#outlined-buttons"
                  className={style.buttonLink}>
                  Sign up with email
                </Button>
                <p className={style.questionSingIn}>Already have an account? Sign in</p>
              </div>

            </Fade>
          </Modal>

        </>
      );
    case 1:
      return (
        <p>Hi!</p>
      )
    default: return (
      <p>Ect</p>
    )

  }

}

export default TransitionsModal;