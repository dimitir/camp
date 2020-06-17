import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './CreateHike_style';

interface IEcoTypeDifficult {
    control: any;
    errors: any;
}

function EcoTypeDifficultLine({ control, errors }: IEcoTypeDifficult) {

    /* const [eco, setEco] = useState(true);
    const [difficulty, setDifficulty] = React.useState('');
    const [typeHike, setTypeHike] = React.useState(''); */
    
    console.log('EcoTypeDifficultLine');
    const classes = useStyles();

    return (
        <>
            <div className={classes.diffTypeEcoLine}>

                <FormControlLabel className={classes.ecoCheck}
                    label={<Typography variant="subtitle1" gutterBottom className={classes.ecoCheckLabel} >With eco activity</Typography>}
                    control={
                        <Controller
                            as={
                                <Checkbox name='eco' onChange={() => { }} />
                            }
                            defaultValue={true}
                            name="eco"
                            control={control}
                        />


                    } />


                <FormControl className={classes.difficulty} error={!!errors.diff}>
                    <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                    <Controller
                        as={
                            <Select
                                name='diff'
                                labelId="demo-simple-select-label"
                                onChange={() => { }}
                            >
                                <MenuItem value={'Easy'}>Easy</MenuItem>
                                <MenuItem value={'Middle'}>Middle</MenuItem>
                                <MenuItem value={'Hard'}>Hard</MenuItem>
                            </Select>

                        }
                        defaultValue=''
                        name="diff"
                        control={control}
                        rules={{ required: "Field Required" }}
                    />
                    <FormHelperText>{errors.diff && errors.diff.message}</FormHelperText>
                </FormControl>

                <FormControl className={classes.difficulty} error={!!errors.diff}>
                    <InputLabel id="activity-type-select-label">Type of hike</InputLabel>
                    <Controller
                        as={
                            <Select
                                name='typeHike'
                                labelId="activity-type-select-label"
                                onChange={() => { }}
                            >
                                <MenuItem value={'Foot'}>Foot</MenuItem>
                                <MenuItem value={'Water'}>Water</MenuItem>
                                <MenuItem value={'Cуcle'}>Cуcle</MenuItem>
                            </Select>
                        }
                        defaultValue=''
                        name="typeHike"
                        control={control}
                        rules={{ required: "Field Required" }}
                    />
                    <FormHelperText>{errors.typeHike && errors.typeHike.message}</FormHelperText>

                </FormControl>
            </div>
        </>
    )
}

export default React.memo(EcoTypeDifficultLine);