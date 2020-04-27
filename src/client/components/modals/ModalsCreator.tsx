import React from 'react';
import { PropsTypes_Modal } from './ContainerModalsCreator';
import modalsName from '../../store/modals/modalNamesList';
import ModalSingUpAll from './ModalSingUpAll';
import ModalSingUpEmail from './ModalSingUpEmail';
import ModalSingInAll from './ModalSingInAll';
import ModalSingInEmail from './ModalSingInEmail';



const TransitionsModal: React.FC<PropsTypes_Modal> = ({ open, handleClose, handleSendEmail, typeModal, handleShowModal }: PropsTypes_Modal) => {
  console.log(typeModal);
  switch (typeModal) {
    case modalsName.SING_UP_ALL:
      return (
        <>
          <ModalSingUpAll
            open={open}
            handleClose={handleClose}
            handleShowModal={handleShowModal}
          />
        </>
      );
    case modalsName.SING_UP_EMAIL:
      return (
        <ModalSingUpEmail
          open={open}
          handleClose={handleClose}
          handleShowModal={handleShowModal}
          handleSendEmail={handleSendEmail}
        />
      )
    case modalsName.SING_IN_ALL:
      return (
        <ModalSingInAll
          open={open}
          handleClose={handleClose}
          handleShowModal={handleShowModal}

        />
      )
    case modalsName.SING_IN_EMAIL:
      return (
        <ModalSingInEmail
          open={open}
          handleClose={handleClose}
          handleShowModal={handleShowModal}
          handleSendEmail={handleSendEmail}
        />
      )

    case modalsName.SING_IN_EMAIL:
      return (
        <ModalSingInEmail
          open={open}
          handleClose={handleClose}
          handleShowModal={handleShowModal}
          handleSendEmail={handleSendEmail}
        />
      )
    default: return (
      <></>
    )

  }

}

export default TransitionsModal;


/* Check your inbox
We just emailed a magic link to ecologyfoot@gmail.com. Click the link to complete your account set-up. */