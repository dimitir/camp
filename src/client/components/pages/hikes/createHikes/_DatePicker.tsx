import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Controller } from 'react-hook-form';
import 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import useStyle from './CreateHike_style';


interface I_DatePicker {
    control: any,
    errors: any,
}

const _DatePicker = ({ control, errors }: I_DatePicker) => {
    const classes = useStyle();
    console.log('_DatePicker');

    /* const [dateStart, setDateStart] = useState<Date | null>(null);
        const [dateFinish, setDateFinish] = useState<Date | null>(null); */

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-between" alignItems='center'>
                    <Controller
                        as={
                            <KeyboardDatePicker
                                error={!!errors.startDate}
                                autoOk
                                views={["year", "month", "date"]}
                                margin="dense"
                                name='startDate'
                                placeholder="31/12/2099"
                                className={classes.datePicker}
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline-start"
                                label="Start"
                                value={() => { }}
                                onChange={() => { }}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                helperText={errors.startDate && errors.startDate.message}
                            />
                        }
                        defaultValue={null}
                        name="startDate"
                        control={control}
                        rules={{ required: "Field Required" }}
                    />

                    <Controller
                        as={
                            <KeyboardDatePicker
                                error={!!errors.finishDate}
                                helperText={errors.finishDate && errors.finishDate.message}
                                autoOk
                                views={["year", "month", "date"]}
                                margin="dense"
                                name='finishDate'
                                placeholder="31/12/2099"
                                className={classes.datePicker}
                                key="finishTrail"
                                disableToolbar
                                variant="inline"
                                format="dd/MM/yyyy"
                                id="date-picker-inline-finish"
                                label="Finish"
                                value={() => { }}
                                onChange={() => { }}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        }
                        defaultValue={null}
                        name="finishDate"
                        control={control}
                        rules={{ required: "Field Required" }}
                    />


                </Grid>
            </MuiPickersUtilsProvider>
        </>
    )
}

export default React.memo(_DatePicker);