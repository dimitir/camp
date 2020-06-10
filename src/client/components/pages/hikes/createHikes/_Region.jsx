import React from 'react';
import { CountryRegionData } from "react-country-region-selector";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';



const jssStyle = () =>
  createStyles({
    countrySelect: {
      minWidth: '250px',
      width: '100%'
    }

  });

const useStyles = makeStyles(jssStyle);


const getRegions = (country) => {
  if (!country) {
    return [];
  }
  return country[2].split("|").map((regionPair) => {
    let [regionName, regionShortCode = null] = regionPair.split("~");
    return regionName;
  });
};


function CountryRegionMUISelectors() {
  const [valueCountry, setValueCountry] = React.useState('');
  const [valueRegion, setValueRegion] = React.useState('');

  const classes = useStyles();

  const handleChange = event => {
    setValueCountry(event.target.value);
  };
  const handleRegion = event => {
    console.log(event.target.val);
    setValueRegion(event.target.value);
  };


  return (
    <>
      <TextField
        className={classes.countrySelect}
        id="country"
        label="Country"
        value={valueCountry}
        select
        onChange={handleChange}
      >
        {CountryRegionData.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option[0]}
          </MenuItem>
        ))}
      </TextField>
      <br />
      <TextField
        className={classes.countrySelect}
        id="region"
        label="Region"
        value={valueRegion}
        select
        onChange={handleRegion}
      >
        {getRegions(valueCountry).map(
          (option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          )
        )}
      </TextField>
    </>
  )
}

export default CountryRegionMUISelectors