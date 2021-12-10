import React from "react";
import { Grid } from "@material-ui/core";
import LineCharts from "./LineCharts.jsx";
import MapCharts from "./MapCharts.jsx";
function Charts() {
  return (
    <Grid container spacing={3}>
      <Grid item sm={8} xs={12}>
        <LineCharts />
      </Grid>
      <Grid item sm={4} xs={12}>
        <MapCharts />
      </Grid>
    </Grid>
  );
}

export default Charts;
