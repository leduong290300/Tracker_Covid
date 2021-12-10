import React, { useEffect, useState, useCallback } from "react";
import SelectCountries from "./components/SelectCountries.jsx";
import Cards from "./components/Cards.jsx";
import Charts from "./components/Charts.jsx";
import { getCountries, getReportsbyCountries } from "./api/api";
import { sortBy } from "lodash";
import { Typography, Container } from "@material-ui/core";
import "@fontsource/roboto";
import "moment/locale/vi";
import moment from "moment";
moment.locale("vi");
function App() {
  //TODO State
  const [countries, setCountries] = useState([]);
  const [selectCountries, setSelectCountries] = useState("");
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getCountries().then((result) => {
      const data = sortBy(result.data, "Country");
      setCountries(data);
      setSelectCountries("vn");
    });
  }, []);

  const handleOnChange = useCallback((e) => {
    setSelectCountries(e.target.value);
  }, []);

  useEffect(() => {
    if (selectCountries) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectCountries,
      );
      getReportsbyCountries(Slug).then((results) => {
        results.data.pop();
        setReports(results.data);
      });
    }
  }, [countries, selectCountries]);
  return (
    <Container>
      <Typography variant="h3" component="h3">
        Số liệu COVID-19
      </Typography>
      <p>{moment().format("LLL")}</p>
      <SelectCountries
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectCountries}
      />
      <Cards reports={reports} />
      <Charts reports={reports} />
    </Container>
  );
}

export default App;
