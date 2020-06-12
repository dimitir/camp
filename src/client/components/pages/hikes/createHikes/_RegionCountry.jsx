import React from 'react';
import { CountryRegionData } from "react-country-region-selector";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './CreateHike_style';


const getRegions = (country) => {
  console.log(country);

  const countryRegion = CountryRegionData.filter(item => item[0] == country);
  console.log(countryRegion);
  if (!country) {
    return [];
  }
  return countryRegion[0][2].split("|").map((regionPair) => {
    let [regionName, regionShortCode = null] = regionPair.split("~");
    console.log(regionName);
    return regionName;
  });
};


function CountryRegionMUISelectors() {
  const [valueCountry, setValueCountry] = React.useState(null);
  const [valueRegion, setValueRegion] = React.useState(null);

  const classes = useStyles();

  /* const handleCountry = event => {
    setValueCountry(event.target.value);
  }; */
  const handleRegion = event => {
    console.log(event.target.val);
    setValueRegion(event.target.value);
  };

  const countries = CountryRegionData.map(option => option[0]);
  const regions = getRegions(valueCountry);

  console.log(regions);

  console.log(CountryRegionData);
  return (
    <>
      <div className={classes.regionLine}>

        <Autocomplete
          className={classes.countryRegionSelect}
          // getOptionSelected={(countries, valueCountry) => countries === valueCountry}
          id="country"
          label="Country"
          value={valueCountry}
          onChange={(event, newValue) => {
            setValueCountry(newValue);
            setValueRegion(null);
          }}
          options={countries}
          renderInput={(params) =>
            <TextField
              {...params}
              label="Countries"
            >
              {CountryRegionData.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option[0]}
                </MenuItem>
              ))}
            </TextField>
          }
        />


        <Autocomplete
          getOptionSelected={(regions, valueRegion) => regions === valueRegion}
          className={classes.countryRegionSelect}
          id="region"
          label="Region"
          value={valueRegion}
          onChange={(event, newValue) => {
            setValueRegion(newValue);
          }}
          options={regions}
          renderInput={(params) =>
            <TextField
              {...params}
              label="Regions"
            >
              {getRegions(valueCountry).map(
                (option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                )
              )}
            </TextField>
          }
        />
      </div>
      <br />

    </>
  )
}

export default CountryRegionMUISelectors