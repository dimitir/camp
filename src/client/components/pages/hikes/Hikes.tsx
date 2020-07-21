import React, {useEffect} from 'react';
import Box from '@material-ui/core/Box';
import DatePicker from '../going/createHikes/_DatePicker';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import RegionCountry from '../going/createHikes/_RegionCountry';
import EcoTypeDifficult from '../going/createHikes/_EcoTypeDifficultLine';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// import Link from '@material-ui/core/Link';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { TypeProps_HikeList } from './ContainerHikes'
import { Ihike } from '../../../store/hikes/types';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '../_icons/hikes/SearchIcon';
import Pagination from '@material-ui/lab/Pagination';
import { Link } from 'react-router-dom'


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
            width: '100%',
        },
        card: {

            width: '55%',
            margin: 'auto',
            marginBottom: '50px',
            borderRadius: '10px',
            paddingLeft: '10px',
            background: '#fffbfe',
            // height: '200px',
            textDecaration: 'none',
            '&:hover': {
                textDecaration: 'none',
            }
        },

        dateGap: {
            fontSize: '14px',

        },
        subscription: {
            marginTop: '5px',
            marginBottom: '20px',
        },
        nameHike: {
            marginTop: '5px',
            '&:hover': {
                textDecaration: 'none',
            }
        },
        footerCard: {
            marginLeft: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '10px',
        },
        pageTitle: {
            textAlign: 'center',
            marginTop: '160px',
            marginBottom: '180px',
            fontWeight: 400
        },
        searchIcon: {
            borderRadius: '20px',
            marginBottom: '-15px',
        },
        pagination: {
            marginBottom: '50px'
        },
        link: {
            textDecaration: 'inherit',
            color: 'inherit'

        }
    })


const useStyles = makeStyles(hikeListStyle);




const dateFormat = (start: any, finish: any) => {

    if (start && finish) {
        start = new Date(start);
        finish = new Date(finish);
        if (start.getMonth() === finish.getMonth()) {
            return `${start.getDate()} - ${finish.getDate()}  ${finish.toLocaleString('default', { month: 'long' })} `
        }
        else {
            return `${start.getDate()} ${start.toLocaleString('default', { month: 'long' })} - ${finish.getDate()}  ${finish.toLocaleString('default', { month: 'long' })} `;
        }
    }
    else return null

}

const HikeList = ({ hikes }: TypeProps_HikeList) => {
    const classes = useStyles();
    const [valueCountry, setValueCountry] = React.useState<string | null>(null);
    const [valueRegion, setValueRegion] = React.useState<string | null>(null);

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


    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const { register, handleSubmit, errors, reset, control, setValue } = useForm();

    const paginationCount = () => {
        if (hikes.length) {
            const count = Math.round(hikes.length / 5);
            return count
        }
        else return 10;
    }



    const paginationGap = (itemOnPage: number) => ({
        from: (page - 1) * itemOnPage,
        to: ((page - 1) * itemOnPage) + itemOnPage,
    })
    const gap = paginationGap(5);

    console.log(gap.from);
    console.log(gap.to);

    const listHike = hikes.slice().reverse();
    const hikeList = listHike.slice(gap.from, gap.to).map((hike: Ihike, index: number) => {

        return (
            <Card className={classes.card} elevation={0}>
                <CardContent>
                    <Typography className={classes.dateGap} color="textSecondary" gutterBottom>
                        {dateFormat(hike.start, hike.finish)}
                    </Typography>
                    <Typography variant="h4" className={classes.nameHike} >
                        {hike.name}
                    </Typography>
                    <Typography className={classes.subscription} color="textSecondary">
                        {hike.subscription}
                    </Typography>

                </CardContent>
                <CardActions className={classes.footerCard}>
                    <div>
                        <Typography variant="body2" component="span">
                            {hike.difficulty}
                        </Typography>
                        <Typography variant="body2" component="span">
                            {hike.typeHike}
                        </Typography>F
                        </div>
                    <Link to={`/hike/${hike._id}`} style={{ textDecoration: 'none' }} key={index}>
                        <Button   >
                            Details
                        </Button>
                    </Link>
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


                            <Button
                                className={classes.searchIcon}
                                variant='outlined'
                                startIcon={<SearchIcon width='16' />}
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

            <Grid container justify="center" className={classes.pagination}>
                <Pagination count={paginationCount()} page={page} onChange={handleChange} />
            </Grid>
        </>
    )
}

export { dateFormat };
export default HikeList;