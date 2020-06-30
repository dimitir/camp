
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import RegionCountry from './_RegionCountry';
import * as yup from "yup";
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser';
import _DatePicker from './_DatePicker';
import Editor from '../../_tools/textEditor/Editor';
import { TypeProps_CreateHike } from './ContainerCreateHike';
import useStyles from './CreateHike_style';
import TeamInformaion from './_TeamInformaion';
import EcoTypeDifficultLine from './_EcoTypeDifficultLine';
import IsOpenEvent from './_OpenEvent';
import SuccessDialog from './_SuccessDialog';






const CreateHike: React.FC<TypeProps_CreateHike> = ({ addHike, user, added, handleAdded }: TypeProps_CreateHike) => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        subscription: yup.string().required(),
        startDate: yup.date().required(),
        finishDate: yup.date().required(),
        diff: yup.string().required(),
        typeHike: yup.string().required(),
        country: yup.string().required(),
        region: yup.string().required(),

    });





    const { register, handleSubmit, errors, reset, control, setValue } = useForm({
        validationSchema: schema
    });

    // const [successDialog, setSuccessDialog] = useState<boolean>(false);
    const [editorDesctiption, setEditorDesctiption] = useState('');
    const [editorTeam, setEditorTeam] = useState('');
    const [valueCountry, setValueCountry] = React.useState<string | null>(null);
    const [valueRegion, setValueRegion] = React.useState<string | null>(null);

    const encodeHtmltoUtf = (str: string) => {
        return new TextEncoder().encode(editorDesctiption)
    }

    // const uint8array = new TextEncoder().encode(valueTextEditor);
    // var str = new TextDecoder('utf-8').decode(uint8array);
    console.log(added);

    const handleSucceess = () => {
        reset();
        setEditorTeam('');
        setEditorDesctiption('');
        setValueCountry(null);
        setValueRegion(null);
        handleAdded(false);
    }

    const onSubmit = handleSubmit(({ name, subscription, startDate, finishDate, diff, typeHike, eco, country, region, openEvent }) => {
        const hike = {
            name: name,
            start: startDate,
            finish: finishDate,
            subscription: subscription,
            discription: encodeHtmltoUtf(editorDesctiption),
            openEvent: openEvent,
            eco: eco,
            difficulty: diff,
            typeHike: typeHike,
            country: valueCountry,
            region: valueRegion,
            teamInfo: encodeHtmltoUtf(editorTeam),
            leaderEmail: user.email
        }
        console.log(hike);
        const result = addHike(hike);
    });

    const classes = useStyles();

    const paperElevation = 0;

    return (
        <>
            <Container className={classes.page}>
                <Typography variant="h1" gutterBottom className={classes.pageTitle}>
                    Create new  hike
                </Typography>

                <Typography variant="h5" gutterBottom className={classes.subTitle}>
                    Basic information
                </Typography>

                <form onSubmit={onSubmit}>
                    <Paper elevation={paperElevation} className={classes.blockBaseInfo}>
                        <Container>
                            <Grid container direction="column" spacing={4}>

                                <TextField name='name' inputRef={register({ required: true })} id="standard-basic" color="secondary" label="Title" className={classes.hikeName}
                                    error={!!errors.name}
                                    helperText={errors.name && errors.name.message} />

                                <_DatePicker errors={errors} control={control} />

                                <Box className={classes.regionCountryBox}>
                                    <RegionCountry setValue={setValue} errors={errors} control={control} valueCountry={valueCountry} valueRegion={valueRegion}
                                        setValueCountry={setValueCountry} setValueRegion={setValueRegion} />
                                </Box>



                                <Box className={classes.ecoTypeDifficultBox}>
                                    <EcoTypeDifficultLine control={control} errors={errors} />
                                </Box>

                                <TextField name='subscription' inputRef={register({ required: true })} className={classes.subscription}
                                    id="standard-textarea" label="Short description" multiline error={!!errors.subscription}
                                    helperText={errors.subscription && errors.subscription.message} />


                                <Box className={classes.openEventBox}>
                                    <IsOpenEvent control={control} />
                                </Box>
                                <Box className={classes.textEditorDiscription}>
                                    <Editor value={editorDesctiption} setValue={setEditorDesctiption} placeholder='Description' />
                                </Box>



                            </Grid>
                        </Container>
                    </Paper>


                    <TeamInformaion editorTeam={editorTeam} setEditorTeam={setEditorTeam} />

                    <Grid container justify="center">
                        <Button color="primary" size="large" variant="contained" onClick={onSubmit} className={classes.buttonCreate}>Create Hike</Button>
                    </Grid>


                    <SuccessDialog added={added} handleSucceess={handleSucceess} />
                </form>

            </Container>



        </>

    )
}

export default CreateHike;