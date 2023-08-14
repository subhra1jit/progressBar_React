const Progressbar = ({ value }) => {
  const value1 = Math.min(100, Math.max(0, value));

  return (
    <div className="progress">
      <span style={{ color: value >= 50 ? "white" : "black", zIndex: 2 }}>
        {value1?.toFixed()}%
      </span>
      <div
        className="checkpoint"
        style={{ width: value ? `${value}%` : 0 }}
      ></div>
    </div>
  );
};

export default Progressbar;
