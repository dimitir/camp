import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import _DatePicker from './_DatePicker';



const jssStyle = (theme: Theme) =>
    createStyles({
        pageTitle: {
            // fontSize: '1.5rem',
            textAlign: 'center',
            marginTop: '160px',
            marginBottom: '80px',
        },
        page: {
            maxWidth: '800px',
            margin: 'auto',
        },
        blockBaseInfo: {
            hight: '400px',
            marginBottom: '50px',
        },
        trailName: {
            marginTop: '20px',
        },
        shortDiscription: {
            marginTop: '20px',
        }


    })

const useStyles = makeStyles(jssStyle)




const CreateTrail = () => {
    const [selectedDateStart, setSelectedDateStart] = React.useState<Date | null>(
        new Date(),
    );
    const [selectedDateFinish, setSelectedDateFinish] = React.useState<Date | null>(
        new Date(),
    );

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
                <Typography
                    variant="h3"
                    gutterBottom
                    className={classes.pageTitle}>
                    Create new trail
                </Typography>
                <Paper elevation={0} className={classes.blockBaseInfo}>
                    <Container>
                        <Grid container
                            direction="column"
                            spacing={4}>

                            <_DatePicker
                                selectedDateStart={selectedDateStart}
                                selectedDateFinish={selectedDateFinish}
                                handleDateChangeStart={handleDateChangeStart}
                                handleDateChangeFinish={handleDateChangeFinish}
                            />
                            <TextField id="standard-basic" label="Title" className={classes.trailName} />
                            <TextField
                                className={classes.shortDiscription}
                                id="standard-textarea"
                                label="Short description"
                                placeholder="Short description"
                                multiline
                            />
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

export default CreateTrail;