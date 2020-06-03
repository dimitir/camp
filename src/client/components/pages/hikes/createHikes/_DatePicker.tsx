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

interface I_DatePicker {
    selectedDateStart: Date | null;
    selectedDateFinish: Date | null;
    handleDateChangeStart(date: Date | null): void;
    handleDateChangeFinish(date: Date | null): void;
}

const _DatePicker = ({ selectedDateStart, selectedDateFinish, handleDateChangeStart, handleDateChangeFinish }: I_DatePicker) => {

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-between" alignItems='center'>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline-start"
                        label="Start"
                        value={selectedDateStart}
                        onChange={handleDateChangeStart}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <Box ><span></span></Box>
                    <KeyboardDatePicker
                        key="finishTrail"
                        disableToolbar
                        variant="inline"
                        format="dd/MM/yyyy"
                        margin="normal"
                        id="date-picker-inline-finish"
                        label="Finish"
                        value={selectedDateFinish}
                        onChange={handleDateChangeFinish}
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