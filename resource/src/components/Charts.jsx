import React from "react";
import { Grid } from "@material-ui/core";
import LineCharts from "./LineCharts.jsx";

function Charts({ reports }) {
  return (
    <Grid container spacing={5} style={{ marginTop: 10 }}>
      <Grid item sm={12} xs={12}>
        <LineCharts data={reports} />
      </Grid>
    </Grid>
  );
}

export default Charts;
