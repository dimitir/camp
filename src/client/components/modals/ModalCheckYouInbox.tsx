import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { PropsTypesModalCheckYouInbox } from './ContainerModalsCreator';
import style from './styleModalCreator.scss';


const ModalSingUpAll: React.FC<PropsTypesModalCheckYouInbox> = ({ open, handleClose }: PropsTypesModalCheckYouInbox) => {

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={style.modal}
                open={open}
                BackdropProps={{ timeout: 100, style: { backgroundColor: "rgba(255, 255, 255, 0.8)", } }}
                onClose={() => handleClose()}
                BackdropComponent={Backdrop}
                disableAutoFocus={true}
                disableEnforceFocus={true}
            >
                <Fade in={open}>
                    <div className={style.paper}>
                        <h2 id="transition-modal-title">Check your inbox</h2>
                        <p id="transition-modal-description" className={style.descriptionTitle} >
                            We just emailed a magic link to ecologyfoot@gmail.com.
                            Click the link to complete your account set-up.
                        </p>

                        <Button
                            variant="outlined"
                            onClick={() => handleClose()}
                            color="primary"
                            className={style.buttonContinue}
                        >Ok</Button>
                    </div>

                </Fade>
            </Modal>

        </>
    );
}


export default ModalSingUpAll;