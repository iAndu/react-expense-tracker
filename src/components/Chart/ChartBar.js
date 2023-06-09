import "./ChartBar.css";

/**
 *
 * @param {{key: string, value: number, maxValue: number, label: string}} props
 */
const ChartBar = (props) => {
  const barFillHeight = props.maxValue
    ? Math.round((props.value / props.maxValue) * 100) + "%"
    : "0%";

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
