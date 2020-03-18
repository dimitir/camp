import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { PropsTypesModalSingAll } from './ContainerModalsCreator';
import style from './styleModalCreator.scss';
import modalNamesList from '../../store/modals/modalNamesList';
import Popover from '@material-ui/core/Popover';

const ModalSingUpAll: React.FC<PropsTypesModalSingAll> = ({ open, handleClose, handleShowModal }: PropsTypesModalSingAll) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    return (
        <>
            <Modal

                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={style.modal}
                open={open}
                onClose={() => handleClose()}
                disableAutoFocus={true}
                disableEnforceFocus={true}
                BackdropProps={{
                    timeout: 100,
                    style: {
                        backgroundColor: 'rgba(255, 255, 255, 0.8)'
                    }
                }}
            >
                <Fade in={open}>
                    <div className={style.paper}>
                        <h2 id="transition-modal-title">Go to adventure</h2>
                        <p id="transition-modal-description" className={style.descriptionTitle} >react-transition-group animates me.</p>
                        <Button variant="outlined" color="primary"
                            className={style.buttonLink}>
                            Sign up with Google
                  </Button>
                        <Button variant="outlined" disableRipple color="primary"
                            className={style.buttonLink}>
                            Sign up with Facebook
                  </Button>
                        <Button variant="text" color="primary"
                            onClick={() => handleShowModal(modalNamesList.SING_UP_EMAIL_NAME_MODAL)}
                            className={style.buttonLink}>
                            Sign up with email
                  </Button>
                        <p className={style.questionSingIn}>Already have an account?
                        <Link
                                onClick={() => handleShowModal(modalNamesList.SING_IN_ALL_NAME_MODAL)}
                                className={style.linkToSing}>
                                Sign in
                        </Link> </p>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}


export default ModalSingUpAll;