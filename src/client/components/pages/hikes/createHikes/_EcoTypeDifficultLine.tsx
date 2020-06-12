import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import useStyles from './CreateHike_style';

interface IEcoTypeDifficult {
    checked: boolean;
    handleVisible: (event: React.ChangeEvent<HTMLInputElement>) => void;
    difficulty: string;
    handleDifficulty: (event: React.ChangeEvent<{ value: unknown }>) => void;
    typeHike: string;
    handleTypeHike: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const EcoTypeDifficultLine = ({ checked, handleVisible, difficulty, handleDifficulty, typeHike, handleTypeHike }: IEcoTypeDifficult) => {

    const classes = useStyles();
    return (
        <>
            <div className={classes.diffTypeEcoLine}>

                <FormControlLabel className={classes.ecoCheck}
                    label={<Typography variant="subtitle1" gutterBottom className={classes.ecoCheckLabel} >With eco activity</Typography>}
                    control={<Checkbox checked={checked} onChange={handleVisible} name="checkedA" />} />


                <FormControl className={classes.difficulty}>
                    <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={difficulty}
                        onChange={handleDifficulty}
                    >
                        <MenuItem value={'Easy'}>Easy</MenuItem>
                        <MenuItem value={'Middle'}>Middle</MenuItem>
                        <MenuItem value={'Hard'}>Hard</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.difficulty}>
                    <InputLabel id="activity-type-select-label">Type of hike</InputLabel>
                    <Select
                        labelId="activity-type-select-label"
                        id="activity-type-select"
                        value={typeHike}
                        onChange={handleTypeHike}
                    >
                        <MenuItem value={'Foot'}>Foot</MenuItem>
                        <MenuItem value={'Water'}>Water</MenuItem>
                        <MenuItem value={'Cуcle'}>Cуcle</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    )
}

export default EcoTypeDifficultLine;