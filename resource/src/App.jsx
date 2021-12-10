import React, { useEffect, useState, useCallback } from "react";
import SelectCountries from "./components/SelectCountries.jsx";
import Cards from "./components/Cards.jsx";
import Charts from "./components/Charts.jsx";
import { getCountries, getReportsbyCountries } from "./api/api";
function App() {
  //TODO State
  const [countries, setCountries] = useState([]);
  const [selectCountries, setSelectCountries] = useState("");
  const [reports, setReports] = useState([]);

  useEffect(() => {
    getCountries().then((result) => {
      setCountries(result.data);
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
    <>
      <SelectCountries
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectCountries}
      />
      <Cards reports={reports} />
      <Charts />
    </>
  );
}

export default App;
