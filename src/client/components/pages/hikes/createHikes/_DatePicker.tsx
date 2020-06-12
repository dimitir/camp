import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import useStyle from './CreateHike_style';



interface I_DatePicker {
    dateStart: Date | null;
    dateFinish: Date | null;
    handleDateStart(date: Date | null): void;
    handleDateFinish(date: Date | null): void;
}

const _DatePicker = ({ dateStart, dateFinish, handleDateStart, handleDateFinish }: I_DatePicker) => {
    const classes = useStyle();
    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-between" alignItems='center'>
                    <KeyboardDatePicker
                        className={classes.datePicker}
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline-start"
                        label="Start"
                        value={dateStart}
                        onChange={handleDateStart}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <KeyboardDatePicker
                        className={classes.datePicker}
                        key="finishTrail"
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline-finish"
                        label="Finish"
                        value={dateFinish}
                        onChange={handleDateFinish}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </>
    )
}

export default _DatePicker;