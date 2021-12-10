import React from "react";
import { Grid } from "@material-ui/core";
import CartSingle from "./CardsSingle.jsx";
function Cards({ reports }) {
  const value = reports && reports.length ? reports[reports.length - 1] : [];
  const report = [
    {
      title: "Số ca mắc",
      count: value.Confirmed,
      type: "confirmed",
    },
    {
      title: "Số ca khỏi",
      count: value.Recovered,
      type: "recovered",
    },
    { title: "Số ca tử vong", count: value.Deaths, type: "deaths" },
  ];

  return (
    <Grid container spacing={3}>
      {report.map((item) => (
        <CartSingle
          title={item.title}
          count={item.count}
          type={item.type}
          key={item.type}
        />
      ))}
    </Grid>
  );
}

export default Cards;
