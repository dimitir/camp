
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

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
import RegionCountry from './_RegionCountry';
import 'date-fns';

import * as yup from "yup";
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser';

import _DatePicker from './_DatePicker';
import Editor from '../../_tools/textEditor/Editor';

import { TypeProps_CreateHike } from './ContainerCreateHike';
import useStyles from './CreateHike_style';
import TeamInformaion from './_TeamInformaion';
import EcoTypeDifficultLine from './_EcoTypeDifficultLine';


import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';






const CreateHike: React.FC<TypeProps_CreateHike> = ({ addHike, user }: TypeProps_CreateHike) => {

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


    const [visible, setVisible] = useState(true);
    const [editorDesctiption, setEditorDesctiption] = useState('');
    const [editorTeam, setEditorTeam] = useState('');
    const [valueCountry, setValueCountry] = React.useState<string | null>(null);
    const [valueRegion, setValueRegion] = React.useState<string | null>(null);

    const encodeHtmltoUtf = (str: string) => {
        return new TextEncoder().encode(editorDesctiption)
    }

    // const uint8array = new TextEncoder().encode(valueTextEditor);
    // var str = new TextDecoder('utf-8').decode(uint8array);

    const handleVisible = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVisible(event.target.checked);
    };


    const onSubmit = handleSubmit(({ name, subscription, startDate, finishDate, diff, typeHike, eco, country, region }) => {
        console.log('startDate');
        console.log(country);
        console.log(region);

        console.log(diff);
        console.log(typeHike);
        console.log(eco);
        const hike = {
            name: name,
            start: startDate,
            finish: finishDate,
            subscription: subscription,
            discription: encodeHtmltoUtf(editorDesctiption),
            visible: visible,
            eco: eco,
            difficulty: diff,
            typeHike: typeHike,
            region: valueRegion,
            country: valueCountry,
            teamInfo: encodeHtmltoUtf(editorTeam),
            leaderEmail: user.email
        }
        console.log('hike');
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

                                <TextField name='name' inputRef={register({ required: true })} id="standard-basic" color="secondary" label="Title" className={classes.hikeName}
                                    error={!!errors.name}
                                    helperText={errors.name && errors.name.message} />

                                <_DatePicker errors={errors} control={control} />

                                <Box className={classes.regionCountryBox}>
                                    <RegionCountry setValue={setValue} errors={errors} control={control} valueCountry={valueCountry} valueRegion={valueRegion}
                                        setValueCountry={setValueCountry} setValueRegion={setValueRegion} />
                                </Box>



                                <Box className={classes.EcoTypeDifficultBox}>
                                    <EcoTypeDifficultLine control={control} errors={errors} />
                                </Box>

                                <TextField name='subscription' inputRef={register({ required: true })} className={classes.subscription}
                                    id="standard-textarea" label="Short description" multiline error={!!errors.subscription}
                                    helperText={errors.subscription && errors.subscription.message} />



                                <Box className={classes.textEditorDiscription}>
                                    <Editor value={editorDesctiption} setValue={setEditorDesctiption} placeholder='Description' />
                                </Box>

                                <FormControlLabel className={classes.visibilityCheck}
                                    label={<Typography variant="body2" gutterBottom className={classes.visabilityCheckLabel} >Visible hike page for everyone</Typography>}
                                    control={<Checkbox checked={visible} onChange={handleVisible} name="checkedA" />} />

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