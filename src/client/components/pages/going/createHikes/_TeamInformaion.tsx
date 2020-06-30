import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Editor from '../../_tools/textEditor/Editor';
import useStyles from './CreateHike_style';



interface ITEamInformaion {
    editorTeam: string;
    setEditorTeam: (value: string) => void
}



const TeamInformaion = ({ editorTeam, setEditorTeam }: ITEamInformaion) => {
    console.log('TeamInformaion');
    const classes = useStyles();

    const paperElevation = 0;
    return (
        <>
            <Typography variant="h5" gutterBottom className={classes.pageSubTitleWithSignature}>
                Team information
            </Typography>
            <Grid container justify="center">
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.pageSubTitle_signature}>
                    This part  will be available to participants after they register for the hike
                </Typography>
            </Grid>
            <Paper elevation={paperElevation} className={classes.blockBaseInfo}>
                <Container>
                    <Grid container direction="column" spacing={4}>
                        <Box className={classes.textEditorTeam}>
                            <Editor value={editorTeam} setValue={setEditorTeam} placeholder='Description' />
                            <Typography variant="body2" gutterBottom  className={classes.teamEditorTip}>
                                *Usually here published viber or telegram link this hike.
                                links to Google Sheets or other sheets service where divide responsibility
                                for common things, foods, equipment, places for tents.
                            </Typography>
                        </Box>
                    </Grid>
                </Container>
            </Paper>
        </>
    )
}



export default React.memo(TeamInformaion);