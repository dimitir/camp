import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { PropsTypesModalSingAll } from './ContainerModalsCreator';
import style from './styleModalCreator.scss';
import modalNamesList from '../../store/modals/modalNamesList';
import SingAll from './_SingAll';


const ModalSingInAll: React.FC<PropsTypesModalSingAll> = ({ open, handleClose, handleShowModal }: PropsTypesModalSingAll) => {

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={style.modal}
                open={open}
                BackdropProps={{ timeout: 100, style: { backgroundColor: "rgba(255, 255, 255, 0.8)" } }}
                onClose={() => handleClose()}
                BackdropComponent={Backdrop}
                disableAutoFocus={true}
                disableEnforceFocus={true}
            >
                <Fade in={open}>
                    <div className={style.paper}>
                        <h2 id="transition-modal-title">Glad to see you</h2>
                        <p id="transition-modal-description" className={style.descriptionTitle} >react-transition-group animates me.</p>
                        <SingAll handleShowModal={handleShowModal} />
                        <p className={style.questionSingIn}>No account?
                        <Link
                                onClick={() => handleShowModal(modalNamesList.SING_UP_ALL)}
                                href="#" className={style.linkToSing}>
                                Create one
                        </Link> </p>
                    </div>
                </Fade>
            </Modal>

        </>
    );
}


export default ModalSingInAll;