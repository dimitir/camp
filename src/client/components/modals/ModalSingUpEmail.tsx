import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import { useForm } from "react-hook-form";
import * as yup from "yup";

import { PropsTypesModalSingEmail } from './ContainerModalsCreator';
import style from './styleModalCreator.scss';
import modalNamesList from '../../store/modals/modalNamesList';


const ModalSingUpAll: React.FC<PropsTypesModalSingEmail> = ({ open, handleClose, handleShowModal, handleSendEmail }: PropsTypesModalSingEmail) => {

    const schema = yup.object().shape({
        email: yup.string().email().required(),
    });

    const { register, handleSubmit, errors, reset } = useForm({
        validationSchema: schema
    });

    const onSubmit = handleSubmit(({ email }) => {
        console.log(email);
        handleSendEmail(email);
        reset();
    });

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
                        <h2 id="transition-modal-title">Sting up with Email</h2>
                        <p id="transition-modal-description" className={style.descriptionTitle} >
                            Enter your email adress to create an account
                        </p>

                        <form noValidate autoComplete="off" onSubmit={onSubmit}>
                            <TextField
                                name='email'
                                inputRef={register({ required: true })}
                                id="standard-basic" label="email"
                            />   {errors.email && <p>{(errors.email as any)?.message}</p>}
                        </form>
                        <Button
                            variant="outlined"
                            onClick={onSubmit}
                            color="primary"
                            className={style.buttonContinue}>
                            Continue
                        </Button>

                        <Link href="#" className={style.linkToSingUpAll} color="inherit"
                            onClick={() => handleShowModal(modalNamesList.SING_UP_ALL_NAME_MODAL)}>
                            <NavigateBeforeIcon fontSize="small" className={style.iconArrowLeft} />All sing up options
                        </Link>
                    </div>

                </Fade>
            </Modal>

        </>
    );
}


export default ModalSingUpAll;