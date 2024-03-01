const ProgressDisplay = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-700 h-2.5 rounded-full"
        style={{
          width: `${progress * 20}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
