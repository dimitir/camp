import React from 'react';
import Box from '@material-ui/core/Box';
import DatePicker from '../going/createHikes/_DatePicker';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import RegionCountry from '../going/createHikes/_RegionCountry';
import EcoTypeDifficult from '../going/createHikes/_EcoTypeDifficultLine';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { TypeProps_HikeList } from './ContainerHikes'
import { Ihike } from '../../../store/hikes/types';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '../_icons/hikes/SearchIcon';



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
            maxWidth: '100%',
            // background: '#FEFEFE'
        },
        filter: {
            marginTop: '120px',
            marginBottom: '100px',
            maxWidth: '60%',
            margin: 'auto',
            padding: '50px 30px 50px 30px',
            // background: '#FEFEFE',
            borderRadius: '20px',
            // border: 'solid 1px black'

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
        searchIcon: {
            borderRadius: '20px',
            marginBottom: '-12px',
        }
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
                        {hike.start} - {hike.finish}
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

            <Typography variant="h1" gutterBottom className={classes.pageTitle}>
                Hikes
            </Typography>

            <form>
                <div className={classes.filterBlock}>

                    <Paper elevation={0} className={classes.filter}>

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

                            {/* <IconButton className={classes.searchIcon}>
                                <SearchIcon width='25' />
                            </IconButton> */}
                            <Button
                                className={classes.searchIcon}
                                variant="outlined"
                                color="secondary"
                                startIcon={<SearchIcon width='20' />}
                            >
                                result
                            </Button>
                        </div>

                    </Paper>
                </div>

            </form>

            <div className={classes.hikesList}>
                {hikeList}

            </div>


        </>
    )
}


export default HikeList;