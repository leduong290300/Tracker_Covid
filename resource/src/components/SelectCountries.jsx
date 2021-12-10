import React from "react";
import {
  NativeSelect,
  FormControl,
  InputLabel,
  Grid,
  makeStyles,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: `${theme.spacing(3)}px 0`,
  },
}));
function SelectCountries({ value, handleOnChange, countries }) {
  const styles = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item sm={12} xs={12}>
        <FormControl className={styles.formControl}>
          <InputLabel htmlFor="country-select" shrink>
            Quốc gia
          </InputLabel>
          <NativeSelect
            value={value}
            onChange={handleOnChange}
            inputProps={{ name: "country", id: "country-select" }}
          >
            {countries.map(({ Country, ISO2 }) => {
              return (
                <option value={ISO2.toLowerCase()} key={ISO2}>
                  {Country}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default SelectCountries;
