import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TypeProps_HikeOne } from './ContainerHikeOne';
import { Typography, Grid, Box } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core';
import axios from 'axios';
import env from '../../../../../env';
import { dateFormat } from '../Hikes';
import CircularProgress from '@material-ui/core/CircularProgress';


const hikeStyle = () =>
    createStyles({
        page: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        nameHike: {
            textAlign: 'center',
            fontWeight: 400
        },
        subscription: {
            textAlign: 'center',
        },
        date: {
            fontWeight: 300,
            textAlign: 'center',
            color: '#bbbfc4',
            marginBottom: '100px',

        },
        region: {
            marginTop: '160px',
            textAlign: 'center',
            color: '#bbbfc4',
            fontWeight: 300,

        },
        typeLine: {
            display: 'flex',
            flexDirection: 'row'
        },
        progress: {
            position: 'absolute',
            top: '50%',
            left: '50%',

        }


    })

const useStyles = makeStyles(hikeStyle);

interface IHike {
    name: string;
    start: Date;
    finish: Date;
    subscription: string;
    discription: Array<any>;
    eco: boolean;
    difficulty: String;
    typeHike: String;
    country: String;
    region: String;
    openEvent: Boolean;
    teamInfo: Array<any>;
    leaderEmail: String;
}

// const isHike = (hike: any): hike is IHike => { return true }

const HikeOne = ({ match, }: any) => {

    const classes = useStyles();

    const hikeId = match.params.id;
    const [hike, setHike] = useState(
        {
            name: '',
            subscription: '',
            start: Date,
            finish: Date,
            typeHike: '',
            difficulty: '',
            discription: [],
            country: '',
            region: '',
            openEvent: false,

        }
    );

    const fetchData = async () => {
        const { data } = await axios({
            url: `${env.host}/hike/getOne`,
            method: 'post',
            data: { id: hikeId }
        })
        setHike(data);
        console.log(data);
    }
    useEffect(() => {
        fetchData()
    }, []);
    if (hike.name) {
        return (
            <>
                <div className={classes.page}>
                    <Typography variant="body1" className={classes.region} >
                        {hike.country}  {hike.region} region
                    </Typography>

                    <Typography variant="h6" gutterBottom className={classes.date}>
                        {dateFormat(hike.start, hike.finish)}
                    </Typography>


                    <Typography variant="h3" gutterBottom className={classes.nameHike}>
                        {hike.name}
                    </Typography>

                    <Typography variant="body1" className={classes.subscription} >
                        {hike.subscription}
                    </Typography>

                    <div className={classes.typeLine}>
                        <Typography variant="body1" >
                            {hike.openEvent ? ` open event` : `close team event`}
                        </Typography>

                        <Typography variant="body1"   >
                            {hike.difficulty} difficulty
                        </Typography>

                        <Typography variant="body1"   >
                            {hike.typeHike} type
                    </Typography>

                    </div>
                </div>



            </>
        )
    }
    else {
        return (
            <>
                {/* <Grid container justify="center" className={classes.progress}> */}
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <CircularProgress disableShrink />
                </Box>
            </>
        )
    }
}


export default HikeOne;