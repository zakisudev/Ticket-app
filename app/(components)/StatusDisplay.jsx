const StatusDisplay = ({ status }) => {
  const getStatus = (status) => {
    let color = 'bg-red-400';
    switch (status) {
      case 'in-progress':
        color = 'bg-yellow-400';
        return color;
      case 'not started':
        color = 'bg-red-400';
        return color;
      case 'completed':
        color = 'bg-green-400';
        return color;
      default:
        return color;
    }
  };
  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getStatus(
        status
      )}`}
    >
      {status}
    </span>
  );
};
export default StatusDisplay;
