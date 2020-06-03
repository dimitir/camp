import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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

// import 'date-fns';
import * as yup from "yup";
import ReactHtmlParser, { processNodes, convertNodeToElement } from 'react-html-parser';


import IconFlag from './IconFlag';
import SleepingBag from './SleepingBag';

import _DatePicker from './_DatePicker';
import Editor from '../../_tools/textEditor/Editor';

import { TypeProps_CreateHike } from './ContainerCreateHike';




const jssStyle = (theme: Theme) =>
    createStyles({
        pageTitle: {
            textAlign: 'center',
            marginTop: '160px',
            marginBottom: '180px',
            fontWeight: 400
        },
        subTitle: {
            textAlign: 'center',
            marginTop: '25px',
            fontWeight: 600

        },
        pageSubTitleWithSignature: {
            textAlign: 'center',
            // marginTop: '140px',
            fontWeight: 600

        },
        pageSubTitle_signature: {
            textAlign: 'center',
            maxWidth: '500px',
            // marginBottom: '20px',
        },
        page: {
            maxWidth: '750px',
            margin: 'auto',
        },
        blockBaseInfo: {
            hight: '400px',
            marginBottom: '120px',
            marginTop: '40px',
            padding: '30px',

        },
        hikeName: {
            marginTop: '20px',
        },
        subscription: {
            marginTop: '7px',
        },
        textEditor: {
            marginTop: '80px',
        },
        textEditorTeam: {
            marginTop: '40px',
        },
        titleBlock: {
            textAlign: 'center'
        },
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
        tentIcon: {
            height: '100px',
            '& path': {
                stroke: '#e5e5e5',
                strokeWidth: '10px',
            }
        },
        visibilityCheck: {
            marginTop: '80px',
            marginBottim: '20px',
        },
        visabilityCheckLabel: {
            fontWeight: 500,
            marginBottom: '-2px'
        },
        buttonCreate: {
            borderRadius: '20px',
            width: '100%',
            maxWidth: '250px',
            margin: 'auto',
            // marginTop: '80px',
            marginBottom: '150px'
        },
    })

const useStyles = makeStyles(jssStyle);




const CreateHike: React.FC<TypeProps_CreateHike> = ({ addHike }: TypeProps_CreateHike) => {

    const schema = yup.object().shape({
        name: yup.string().required(),
        subscription: yup.string().required(),
    });

    const { register, handleSubmit, errors, reset } = useForm({
        validationSchema: schema
    });

    const [selectedDateStart, setSelectedDateStart] = useState<Date | null>(new Date());
    const [selectedDateFinish, setSelectedDateFinish] = useState<Date | null>(new Date());

    const [checked, setChecked] = useState(true);

    const [valueTextEditor, setValueTextEditor] = useState('');
    const [valueTextEditorTeam, setValueTextEditorTeam] = useState('');


    const encodeHtmltoUtf = (str: string) => {
        return new TextEncoder().encode(valueTextEditor)
    }

    // const uint8array = new TextEncoder().encode(valueTextEditor);
    // var str = new TextDecoder('utf-8').decode(uint8array);



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    const handleDateChangeStart = (date: Date | null) => {
        setSelectedDateStart(date);
    };
    const handleDateChangeFinish = (date: Date | null) => {
        setSelectedDateFinish(date);
    };

    const onSubmit = handleSubmit(({ hikeName, subscription }) => {

        console.log(hikeName);
        const hike = {
            name: hikeName,
            start: selectedDateFinish,
            finish: selectedDateFinish,
            subscription: subscription,
            discription: encodeHtmltoUtf(valueTextEditor),
            isVisible: checked,
            teamInfo: encodeHtmltoUtf(valueTextEditorTeam),
        }
        console.log(hike);
        addHike(hike);
        reset();
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

                                <_DatePicker selectedDateStart={selectedDateStart} selectedDateFinish={selectedDateFinish}
                                    handleDateChangeStart={handleDateChangeStart} handleDateChangeFinish={handleDateChangeFinish} />

                                <TextField
                                    name='subscription'
                                    inputRef={register({ required: true })}
                                    className={classes.subscription}
                                    id="standard-textarea"
                                    label="Short description"
                                    multiline
                                />
                                {errors.subscription && <p>{(errors.subscription as any)?.message}</p>}


                                <Box className={classes.textEditor}>
                                    <Editor value={valueTextEditor} setValue={setValueTextEditor} placeholder='Description' />
                                </Box>


                                <FormControlLabel className={classes.visibilityCheck}
                                    label={<Typography variant="subtitle1" gutterBottom className={classes.visabilityCheckLabel} >Visible hike page for everyone</Typography>}
                                    control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />} />


                                <Typography variant="body1" gutterBottom className='' >

                                    Or uncheck and in common list the hike will be absent. For share hike page with your close team, pass them  link below.
                                Then they will book hike, event will be visible on  <Link href="#" variant="subtitle1">My hikes</Link> page.
                                </Typography>

                                <Typography variant="body1" gutterBottom className='' >
                                    Link to  this event <Link href="#" variant="subtitle1"> Link</Link>
                                </Typography>

                            </Grid>
                        </Container>
                    </Paper>



                    <Typography variant="h5" gutterBottom className={classes.pageSubTitleWithSignature}>
                        Team information
                    </Typography>
                    <Grid container justify="center">
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            className={classes.pageSubTitle_signature}>
                            This part of the information will be available to participants after they register for the hike
                    </Typography>
                    </Grid>
                    <Paper elevation={paperElevation} className={classes.blockBaseInfo}>
                        <Container>
                            <Grid container direction="column" spacing={4}>
                                <Box className={classes.textEditorTeam}>
                                    <Editor value={valueTextEditorTeam} setValue={setValueTextEditorTeam} placeholder='Description' />
                                    <Typography variant="body2" gutterBottom >
                                        *Usually here published viber or telegram link this hike.
                                        links to Google Sheets or other sheets service where divide responsibility
                                        for common things, foods, equipment, places for tents.
                                </Typography>
                                </Box>
                            </Grid>
                        </Container>
                    </Paper>
                    <Grid container justify="center">
                        <Button color="primary" size="large" variant="contained" onClick={onSubmit} className={classes.buttonCreate}>Create Hike</Button>
                    </Grid>
                </form>

            </Container>


        </>

    )
}

export default CreateHike;