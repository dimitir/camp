import React from 'react';
import Grid from '@material-ui/core/Grid';
import HikesListIcon from '../../_icons/hikes/ListHikesIcon';
import HikesHistoryIcon from '../../_icons/hikes/HistoryHikesIcon';
import MyHikesIcon from '../../_icons/hikes/MyHikesIcon';
import LeadHikesIcon from '../../_icons/hikes/LeadHikesIcon';
import CreateHikeIcon from '../../_icons/hikes/CreateHikeIcon';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



const hikeNavbarStyle = (theme: Theme) =>
    createStyles({
        hikeNavbar: {
            margin: 'auto',
            marginTop: '120px',
            maxWidth: '70%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',

        },
        iconLabel: {
            marginTop: '5px'
        }

    })


const useStales = makeStyles(hikeNavbarStyle);


interface INavbarHikes {
    activeLink: string
}

const NavBarHikes = ({ activeLink }: INavbarHikes) => {

    const classes = useStales();

    return (

        <>
            <BottomNavigation
                value={activeLink}
                showLabels className={classes.hikeNavbar}>

                <BottomNavigationAction value='0' href="/hikes/list" label={
                    <Typography variant="body2" className={classes.iconLabel} gutterBottom>
                        List
                    </Typography>}
                    icon={<HikesListIcon width='30' />} />

                <BottomNavigationAction value='1' href="/hikes/create" label={
                    <Typography variant="body2" className={classes.iconLabel} gutterBottom>
                        Create
                    </Typography>}
                    icon={<CreateHikeIcon width='30' />} />
                <BottomNavigationAction value='2' label={
                    <Typography variant="body2" className={classes.iconLabel} gutterBottom>
                        Going
                    </Typography>}
                    icon={<MyHikesIcon width='30' />} />
                <BottomNavigationAction value='3' label={
                    <Typography variant="body2" className={classes.iconLabel} gutterBottom>
                        Lead
                    </Typography>}
                    icon={<LeadHikesIcon width='30' />} />
            </BottomNavigation>

        </>
    )
};


export default NavBarHikes;



{/* <HikesListIcon width='35' />

                <CreateHikeIcon width='35' />

                <MyHikesIcon width='35' />

                <LeadHikesIcon width='35' /> */}
{/*   <HikesHistoryIcon width='35' /> */ }