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
import FormControl from '@material-ui/core/FormControl'

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
            marginBottom: '80px',
            // fontWeight: 400
        },
        pageSubTitle: {
            textAlign: 'center',
            marginTop: '160px',
            marginBottom: '40px',
            fontWeight: 500

        },
        pageSubTitleWithSignature: {
            textAlign: 'center',
            marginTop: '160px',
            fontWeight: 500

        },
        pageSubTitle_signature: {
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '20px',
        },
        page: {
            maxWidth: '750px',
            margin: 'auto',
        },
        blockBaseInfo: {
            hight: '400px',
            marginBottom: '50px',
        },
        hikeName: {
            marginTop: '20px',
        },
        subscription: {
            marginTop: '7px',
        },
        textEditor: {
            marginTop: '60px',
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
            marginTop: '20px',
            marginBottim: '20px',
        },
        buttonCreate: {
            borderRadius: '20px',
            width: '100%',
            maxWidth: '250px',
            margin: 'auto',
            marginTop: '80px',
            marginBottom: '120px'
        },
    })

const useStyles = makeStyles(jssStyle);




const CreateHike: React.FC<TypeProps_CreateHike> = ({ addHike }: TypeProps_CreateHike) => {

    /*    const schema = yup.object().shape({
           hikeName: yup.string().required(),
           shortDescription: yup.string().required(),
       });
    */
    const { register, handleSubmit, errors, reset } = useForm();

    const [selectedDateStart, setSelectedDateStart] = useState<Date | null>(new Date());
    const [selectedDateFinish, setSelectedDateFinish] = useState<Date | null>(new Date());

    const [checked, setChecked] = useState(true);

    const [valueTextEditor, setValueTextEditor] = useState('');
    const [valueTextEditorTeam, setValueTextEditorTeam] = useState('');


    /* 
    const uint8array = new TextEncoder().encode(valueTextEditor);

    var str = new TextDecoder('utf-8').decode(uint8array);
    const renderStr = () => {
        new TextDecoder('utf-8').decode(uint8array);
    }
    console.log(uint8array);
    console.log(str);
    console.log('str'); */


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };





    /*   const onSubmit = handleSubmit(({ hikeName, subscription }) => {
          console.group('hike');
          console.log('hike');
          const hike = {
              name: hikeName,
              start: selectedDateFinish,
              finish: selectedDateFinish,
              subscription: subscription,
              discription: valueTextEditor,
              isVisible: checked,
              discriptionTeam: valueTextEditorTeam,
          }
          console.log(hike);
          addHike(hike);
          console.log(hikeName);
          console.log(subscription);
          console.log(valueTextEditor);
          reset();
      }); */



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
            discription: valueTextEditor,
            isVisible: checked,
            discriptionTeam: valueTextEditorTeam,
        }
        console.log(hike);
        addHike(hike);
        console.log(hikeName);
        console.log(subscription);
        console.log(valueTextEditor);
        reset();
    });

    const classes = useStyles();

    return (
        <>
            <Container className={classes.page}>
                <Typography variant="h1" gutterBottom className={classes.pageTitle}>
                    Create new  hike
                </Typography>

                <Typography variant="h4" gutterBottom className={classes.pageSubTitle}>
                    Basic information
                    {/* {ReactHtmlParser(valueTextEditor)} */}
                </Typography>
                <Paper elevation={0} className={classes.blockBaseInfo}>
                    <Container>
                        <form onSubmit={onSubmit}>
                            <Grid container direction="column" spacing={4}>
                                {/*  <form noValidate autoComplete="off" onSubmit={onSubmit}>
                                <TextField
                                    name='email'
                                    inputRef={register({ required: true })}
                                    id="standard-basic" label="email"
                                />   {errors.email && <p>{(errors.email as any)?.message}</p>}
                            </form> */}

                                <TextField name='hikeName' inputRef={register({ required: true })} id="standard-basic" color="secondary" label="Title" className={classes.hikeName} />
                                {errors.hikeName && <p>{(errors.hikeName as any)?.message}</p>}
                                <_DatePicker selectedDateStart={selectedDateStart} selectedDateFinish={selectedDateFinish}
                                    handleDateChangeStart={handleDateChangeStart} handleDateChangeFinish={handleDateChangeFinish} />

                                <TextField
                                    name='subscription'
                                    inputRef={register({ required: true })}
                                    className={classes.subscription}
                                    id="standard-textarea"
                                    label="Short description"
                                    placeholder="Short description"
                                    multiline
                                />
                                {errors.subscription && <p>{(errors.subscription as any)?.message}</p>}

                                <Box className={classes.textEditor}>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        className={classes.titleBlock}
                                    >
                                        Description
                                </Typography>
                                    <Editor value={valueTextEditor} setValue={setValueTextEditor} />
                                </Box>
                                <FormControlLabel className={classes.visibilityCheck} label=" Visible hike page for everyone"
                                    control={<Checkbox checked={checked} onChange={handleChange} name="checkedA" />}
                                />
                                <Typography variant="body1" gutterBottom className='' >
                                    Or uncheck and in common list the hike will be absent. For share hike page with your close team, pass them  link below.
                                Then they will book hike, event will be visible on  <Link href="#" variant="subtitle1">My hikes</Link> page.
                            </Typography>
                                <Typography variant="body1" gutterBottom className='' >
                                    Link to  this event <Link href="#" variant="subtitle1"> Link</Link>
                                </Typography>
                                <Typography variant="h4" gutterBottom className={classes.pageSubTitleWithSignature}>
                                    Team information
                            </Typography>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    className={classes.pageSubTitle_signature}>
                                    This part of the information will be available to participants after they register for the hike, on the hike page.
                            </Typography>
                                <Box className={classes.textEditor}>

                                    <Typography variant="h6" gutterBottom className={classes.titleBlock}>
                                        Team Description
                                </Typography>
                                    <Typography variant="body1" gutterBottom >
                                        Usually here published viber or telegram link this hike.
                                        links to Google Sheets or other sheets service where divide responsibility
                                        for common things, foods, equipment, places for tents.
                                </Typography>
                                    <Editor value={valueTextEditorTeam} setValue={setValueTextEditorTeam} />
                                </Box>
                                <Button
                                    variant="outlined"
                                    onClick={onSubmit}
                                    color="primary"
                                >
                                    Continue
                        </Button>
                                {/* <Button color="primary" size="large" variant="contained" onClick={onSubmit} className={classes.buttonCreate}>Create Hike</Button> */}
                            </Grid>
                        </form>
                    </Container>
                </Paper>

            </Container>


        </>

    )
}

export default CreateHike;