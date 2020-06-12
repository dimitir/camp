import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DirectionsIcon from '@material-ui/icons/Directions';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Region from './_Region';
import RegionCountry from './_RegionCountry';
// import 'date-fns';
import * as yup from "yup";
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser';


import IconFlag from './IconFlag';
import SleepingBag from './SleepingBag';

import _DatePicker from './_DatePicker';
import Editor from '../../_tools/textEditor/Editor';

import { TypeProps_CreateHike } from './ContainerCreateHike';
import useStyles from './CreateHike_style';
import TeamInformaion from './_TeamInformaion';
import EcoTypeDifficultLine from './_EcoTypeDifficultLine';




const CreateHike: React.FC<TypeProps_CreateHike> = ({ addHike, user }: TypeProps_CreateHike) => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        subscription: yup.string().required(),
    });

    const { register, handleSubmit, errors, reset } = useForm({
        validationSchema: schema
    });

    const [dateStart, setDateStart] = useState<Date | null>(new Date());
    const [dateFinish, setDateFinish] = useState<Date | null>(new Date());
    const [checked, setChecked] = useState(true);
    const [editorDesctiption, setEditorDesctiption] = useState('');
    const [editorTeam, setEditorTeam] = useState('');
    const [difficulty, setDifficulty] = React.useState('');
    const [typeHike, setTypeHike] = React.useState('');

    const encodeHtmltoUtf = (str: string) => {
        return new TextEncoder().encode(editorDesctiption)
    }

    // const uint8array = new TextEncoder().encode(valueTextEditor);
    // var str = new TextDecoder('utf-8').decode(uint8array);

    const handleVisible = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleDifficulty = (event: React.ChangeEvent<{ value: unknown }>) => {
        setDifficulty(event.target.value as string);
    };

    const handleTypeHike = (event: React.ChangeEvent<{ value: unknown }>) => {
        setTypeHike(event.target.value as string);
    };

    const handleDateStart = (date: Date | null) => {
        setDateStart(date);
    };
    const handleDateFinish = (date: Date | null) => {
        setDateFinish(date);
    };

    const onSubmit = handleSubmit(({ name, subscription }) => {

        const hike = {
            name: name,
            start: dateStart,
            finish: dateFinish,
            subscription: subscription,
            discription: encodeHtmltoUtf(editorDesctiption),
            visible: checked,
            teamInfo: encodeHtmltoUtf(editorTeam),
            leaderEmail: user.email
        }
        console.log(hike);
        addHike(hike);
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

                                <TextField name='name' inputRef={register({ required: true })} id="standard-basic" color="secondary" label="Title" className={classes.hikeName} />
                                {errors.name && <p>{(errors.name as any)?.message}</p>}

                                <_DatePicker dateStart={dateStart} dateFinish={dateFinish}
                                    handleDateStart={handleDateStart} handleDateFinish={handleDateFinish} />
                                <Box className={classes.regionCountryBox}>
                                    <RegionCountry />
                                </Box>



                                <Box className={classes.EcoTypeDifficultBox}>
                                    <EcoTypeDifficultLine checked={checked} handleVisible={handleVisible}
                                        difficulty={difficulty} handleDifficulty={handleDifficulty}
                                        typeHike={typeHike} handleTypeHike={handleTypeHike} />
                                </Box>

                                <TextField name='subscription' inputRef={register({ required: true })} className={classes.subscription}
                                    id="standard-textarea" label="Short description" multiline />
                                {errors.subscription && <p>{(errors.subscription as any)?.message}</p>}



                                <Box className={classes.textEditorDiscription}>
                                    <Editor value={editorDesctiption} setValue={setEditorDesctiption} placeholder='Description' />
                                </Box>

                                <FormControlLabel className={classes.visibilityCheck}
                                    label={<Typography variant="body2" gutterBottom className={classes.visabilityCheckLabel} >Visible hike page for everyone</Typography>}
                                    control={<Checkbox checked={checked} onChange={handleVisible} name="checkedA" />} />

                                <Typography variant="body1" gutterBottom >
                                    Or uncheck and in common list the hike will be absent. For share hike page with your close team, pass them  link below.
                                Then they will book hike, event will be visible on  <Link href="#" variant="subtitle1">My hikes</Link> page.
                                </Typography>

                                <Typography variant="body1" gutterBottom className='' >
                                    Link to  this event <Link href="#" variant="subtitle1"> Link</Link>
                                </Typography>

                            </Grid>
                        </Container>
                    </Paper>


                    <TeamInformaion editorTeam={editorTeam} setEditorTeam={setEditorTeam} />

                    <Grid container justify="center">
                        <Button color="primary" size="large" variant="contained" onClick={onSubmit} className={classes.buttonCreate}>Create Hike</Button>
                    </Grid>
                </form>

            </Container>


        </>

    )
}

export default CreateHike;