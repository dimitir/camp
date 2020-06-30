import React from 'react';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import useStyles from './CreateHike_style';
import { Controller } from 'react-hook-form';


interface TOpenEvent {
    control: any;
}



const OpenEvent = ({ control }: TOpenEvent) => {

    const classes = useStyles();

    return (
        <>
            <FormControlLabel
                label={<Typography variant="subtitle1" gutterBottom className={classes.openEventLabel} >Open event</Typography>}
                control={
                    <Controller
                        as={
                            <Checkbox name='openEvent' onChange={() => { }} />
                        }
                        defaultValue={true}
                        name="openEvent"
                        control={control}
                    />


                } />

            <Typography variant="body1" gutterBottom >
                Or uncheck and in common list the hike will be absent. For share hike page with your close team, pass them link on this event.
            </Typography>

        </>
    )
}



export default OpenEvent;