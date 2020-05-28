import React from 'react';
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
import IconFlag from './IconFlag';
import SleepingBag from './SleepingBag';

import 'date-fns';
import _DatePicker from './_DatePicker';
import Editor from '../../_tools/textEditor/Editor';



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
        shortDiscription: {
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
        }

    })

const useStyles = makeStyles(jssStyle);




const CreateHike = () => {
    const [selectedDateStart, setSelectedDateStart] = React.useState<Date | null>(
        new Date(),
    );
    const [selectedDateFinish, setSelectedDateFinish] = React.useState<Date | null>(
        new Date(),
    );
    const [checked, setChecked] = React.useState(true);
    const [valueTextEditor, setValueTextEditor] = React.useState('');
    const [valueTextEditorTeam, setValueTextEditorTeam] = React.useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };


    const handleDateChangeStart = (date: Date | null) => {
        console.log(date);
        setSelectedDateStart(date);
    };
    const handleDateChangeFinish = (date: Date | null) => {
        console.log(date);
        setSelectedDateFinish(date);
    };

    const classes = useStyles();



    return (
        <>
            <Container className={classes.page}>
                <Typography variant="h1" gutterBottom className={classes.pageTitle}>
                    Create new  hike
                </Typography>
                <Typography variant="h4" gutterBottom className={classes.pageSubTitle}>
                    Basic information
                </Typography>
                <Paper elevation={0} className={classes.blockBaseInfo}>
                    <Container>
                        <Grid container direction="column" spacing={4}>

                            <TextField id="standard-basic" color="secondary" label="Title" className={classes.hikeName} />
                            <_DatePicker selectedDateStart={selectedDateStart} selectedDateFinish={selectedDateFinish}
                                handleDateChangeStart={handleDateChangeStart} handleDateChangeFinish={handleDateChangeFinish} />
                            <TextField
                                className={classes.shortDiscription}
                                id="standard-textarea"
                                label="Short description"
                                placeholder="Short description"
                                multiline
                            />
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

                            <Box className={classes.textEditor}>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    className={classes.titleBlock}
                                >
                                    Tents
                                </Typography>
                                <Paper component="form" className={classes.root}>
                                    <IconFlag width='60' fill="#49c" />

                                    <InputBase
                                        className={classes.input}
                                        placeholder="Tent name"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />

                                    <Divider className={classes.divider} orientation="vertical" />
                                    <SleepingBag width='50' fill="#49c" />
                                    <InputBase
                                        className={classes.input}
                                        placeholder="places"
                                        type="number"

                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <Divider className={classes.divider} orientation="vertical" />
                                    <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                        <DirectionsIcon />
                                    </IconButton>
                                </Paper>

                            </Box>

                        </Grid>
                    </Container>
                </Paper>
                <Paper elevation={1} className={classes.blockBaseInfo}>
                    <Grid container
                        direction="column"
                        spacing={4}>
                        <Grid item
                            xs={10}
                        >

                            jkj
                </Grid>
                    </Grid>
                </Paper>
            </Container>


        </>

    )
}

export default CreateHike;