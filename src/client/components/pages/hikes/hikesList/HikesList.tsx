import React from 'react';
import NavbarHikes from '../hikeNavbar/NavbarHikes';
import Box from '@material-ui/core/Box';
import DatePicker from '../createHikes/_DatePicker';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import RegionCountry from '../createHikes/_RegionCountry';
import EcoTypeDifficult from '../createHikes/_EcoTypeDifficultLine';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { TypeProps_HikeList } from './ContainerHikeList'
import { Ihike } from '../../../../store/hikes/types';
import Grid from '@material-ui/core/Grid';





export interface TypeHike {
    name: String;
    start: Date;
    finish: Date;
    subscription: String;
    discription: any;
    openEvent: Boolean;
    teamInfo: any;
    eco: Boolean,
    difficulty: String,
    typeHike: String,
    region: String,
    country: String,
    leaderEmail: String
}

const hikeListStyle = () =>
    createStyles({
        filterBlock: {
            maxWidth: '75%',
            margin: 'auto',
            marginTop: '120px',
            marginBottom: '100px',
            padding: '30px',
            borderRadius: '20px',
            background: '#FEFEFE'
        },
        date: {
            width: '46%',
        },
        region: {
            width: '46%',
            marginBottom: '-20px'
        },
        dateRegion: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        ecoLine: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            marginBottom: '20px'
        },
        ecoTypeDifficultBox: {
            // marginLeft: '18px',
            width: '80%'
        },
        botton: {
            marginTop: '20pt',
            borderRadius: '20px',
            width: '100%',
            maxWidth: '120px',
            // margin: 'auto',
        },
        hikesList: {
            marginTop: '100px',
            marginBottom: '50px',
            width: '100%'
        },
        card: {
            width: '50%',
            margin: 'auto',
            marginBottom: '30px'
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        pageTitle: {
            textAlign: 'center',
            marginTop: '160px',
            marginBottom: '180px',
            fontWeight: 400
        },
    })


const useStyles = makeStyles(hikeListStyle);

const HikeList = ({ hikes }: TypeProps_HikeList) => {
    const classes = useStyles();
    const [valueCountry, setValueCountry] = React.useState<string | null>(null);
    const [valueRegion, setValueRegion] = React.useState<string | null>(null);

    console.log(hikes);

    const { register, handleSubmit, errors, reset, control, setValue } = useForm();


    const hikeList = hikes.map((hike: Ihike, index: number) => {
        return (
            <Card className={classes.card} key={index}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                      </Typography>
                    <Typography variant="h5" component="h2">
                        {hike.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
                      </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        )

    })




    return (
        <>
            <NavbarHikes activeLink={'0'} />

            <Typography variant="h1" gutterBottom className={classes.pageTitle}>
                Hikes
                </Typography>

            <form>
                <Paper elevation={0} className={classes.filterBlock}>

                    <div className={classes.dateRegion}>
                        <div className={classes.date}>
                            <DatePicker control={control} errors={errors} />
                        </div>
                        <div className={classes.region}>
                            <RegionCountry setValue={setValue} errors={errors} control={control} valueCountry={valueCountry} valueRegion={valueRegion}
                                setValueCountry={setValueCountry} setValueRegion={setValueRegion} />
                        </div>

                    </div>
                    <div className={classes.ecoLine}>

                        <div className={classes.ecoTypeDifficultBox}>
                            <EcoTypeDifficult control={control} errors={errors} />
                        </div>

                        <Button className={classes.botton} variant="contained" color="primary">
                            Find
                        </Button>
                    </div>
                </Paper>

            </form>

            <div className={classes.hikesList}>
                {hikeList}

            </div>


        </>
    )
}


export default HikeList;