import React from "react";
import { NativeSelect, FormControl, InputLabel } from "@material-ui/core";
function SelectCountries({ value, handleOnChange, countries }) {
  return (
    <FormControl>
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
  );
}

export default SelectCountries;
