import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


interface ISuccessDialog {
    added: boolean;
    handleSucceess: () => void;
}

const SuccessDialog = ({ added, handleSucceess }: ISuccessDialog) => {
    const handleClose = () => {
        handleSucceess();
    };

    return (
        <>
            <Dialog
                BackdropProps={{ style: { borderRadius: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' } }}
                PaperProps={{
                    style: { borderRadius: '10px' }
                }}
                open={added}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Hike was successfull created</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ textAlign: 'center' }}  >
                        Hava a great adventure!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid container justify="center">
                        <Button style={{ borderRadius: '20px' }} onClick={handleClose} variant="outlined" size='small' color="primary">Ok</Button>
                    </Grid>


                </DialogActions>

            </Dialog>
        </>
    )
}

export default SuccessDialog;