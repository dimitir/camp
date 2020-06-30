import React, { useMemo } from 'react';
import { CountryRegionData } from "react-country-region-selector";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './CreateHike_style';
import { Controller } from 'react-hook-form';


const getRegions = (country: any) => {
  console.log(country);

  interface IData {
    CountryRegionData?: any;
  }



  let data: any;
  data = (CountryRegionData as IData);

  const countryRegion = (
    CountryRegionData as any).filter((item: any) => item[0] == country);
  if (!country) {
    return [];
  }
  return countryRegion[0][2].split("|").map((regionPair: any) => {
    let [regionName, regionShortCode = null] = regionPair.split("~");
    return regionName;
  });
};


interface ICountryRegion {
  valueCountry: string | null;
  valueRegion: string | null;
  setValueCountry(val: string): void;
  setValueRegion(val: string | null): void;
  control: any;
  setValue: any;
  errors: any;
}

function CountryRegion({ valueCountry, setValueCountry, valueRegion, setValueRegion, control, setValue, errors }: ICountryRegion) {

  const classes = useStyles();



  const handleCountry = (event: any, newValue: string) => {
    setValueCountry(newValue);
    setValueRegion(null);
    setValue('country', newValue);
    if (newValue) {
      delete errors.country
    }
    else {
      errors.country = {
        message: 'field country is required',
        type: 'required'
      }
    }
  }


  const handleRegion = (event: any, newValue: any) => {
    setValueRegion(newValue);
    setValue('region', newValue);
    if (newValue) {
      delete errors.region
    }
    else {
      errors.region = {
        message: 'field region is required',
        type: 'required'
      }
    }

  }


  const countries = CountryRegionData.map((option: any) => option[0]);
  const regions = getRegions(valueCountry);


  // console.log(CountryRegionData);
  return (
    <>
      <div className={classes.regionLine}>
        <Autocomplete
          className={classes.countryRegionSelect}
          id="country"
          value={valueCountry}
          onChange={handleCountry}
          options={countries}
          renderInput={(params) =>
            <Controller
              as={
                <TextField
                  name='country'
                  {...params}
                  label="Countries"
                  error={!!errors.country}
                  helperText={errors.country && errors.country.message}
                >
                  {CountryRegionData.map((option: any, index: any) => (
                    <MenuItem key={index} value={option}>
                      {option[0]}
                    </MenuItem>
                  ))}
                </TextField>
              }
              valueName='country'
              name="country"
              control={control}
            />


          }
        />


        <Autocomplete
          getOptionSelected={(regions, valueRegion) => regions === valueRegion}
          className={classes.countryRegionSelect}
          id="region"
          value={valueRegion}
          onChange={handleRegion}
          options={regions}
          renderInput={(params) =>
            <Controller
              as={
                <TextField
                  {...params}
                  label="Regions"
                  error={!!errors.region}
                  helperText={errors.region && errors.region.message}
                >
                  {getRegions(valueCountry).map(
                    (option: any, index: any) => (
                      <MenuItem key={index} value={option}>
                        {option}
                      </MenuItem>
                    )
                  )}
                </TextField>
              }
              name="region"
              control={control}
              rules={{ required: "Field Required" }}
            />
          }
        />
      </div>
      <br />

    </>
  )
}

export default React.memo(CountryRegion);