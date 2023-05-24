import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const maxValue = props.dataPoints.reduce(
    (partSum, dp) => partSum + dp.value,
    0
  );

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
