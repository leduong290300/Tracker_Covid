import React, { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highchart from "highcharts";
import moment from "moment";
import { ButtonGroup, Button } from "@material-ui/core";
const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYYY"));
  return {
    chart: {
      height: 500,
    },
    title: {
      text: "Tổng ca nhiễm",
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ["#F3585B"],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Tổng Ca nhiễm",
        data: data.map((item) => item.Confirmed),
      },
    ],
  };
};
function LineCharts({ data }) {
  const [options, setOptions] = useState({});
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    let dataFilter = [];
    switch (filter) {
      case "all":
        dataFilter = data;
        break;
      case "30":
        dataFilter = data.slice(data.length - 30);
        break;
      case "7":
        dataFilter = data.slice(data.length - 7);
        break;
      default:
        dataFilter = data;
        break;
    }
    setOptions(generateOptions(dataFilter));
  }, [data, filter]);

  return (
    <>
      <ButtonGroup
        size="small"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          color={filter === "all" ? "secondary" : ""}
          onClick={() => setFilter("all")}
        >
          Tất cả
        </Button>
        <Button
          color={filter === "30" ? "secondary" : ""}
          onClick={() => setFilter("30")}
        >
          30 Ngày
        </Button>
        <Button
          color={filter === "7" ? "secondary" : ""}
          onClick={() => setFilter("7")}
        >
          7 Ngày
        </Button>
      </ButtonGroup>
      <HighchartsReact highcharts={Highchart} options={options} />
    </>
  );
}

export default LineCharts;
