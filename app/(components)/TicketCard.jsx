import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = async ({ tickets }) => {
  const uniqCat = [...new Set(tickets?.map((ticket) => ticket.category))];

  const formatTime = (time) => {
    return new Date(time).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  return tickets && tickets?.length > 0 ? (
    uniqCat?.map((cat, catIdx) => (
      <div className="mb-4" key={catIdx}>
        <h2>{cat}</h2>
        {tickets
          .filter((ticket) => ticket.category === cat)
          .map((ticket) => (
            <div
              key={ticket._id}
              className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2"
            >
              <div className="flex mb-3">
                <PriorityDisplay priority={ticket.priority} />
                <div className="ml-auto">
                  <DeleteBlock id={ticket._id} />
                </div>
              </div>
              <h4>{ticket.title}</h4>
              <hr className="h-px border-0 bg-page mb-2" />
              <p className="whitespace-pre-wrap">{ticket.description}</p>
              <div className="flex-grow"></div>
              <div className="flex mt-2">
                <div className="flex flex-col">
                  <p className="text-xs my-1">{formatTime(ticket.createdAt)}</p>
                  <ProgressDisplay progress={ticket.progress} />
                </div>
                <div className="flex ml-auto items-end">
                  <StatusDisplay status={ticket.status} />
                </div>
              </div>
            </div>
          ))}
      </div>
    ))
  ) : (
    <div className="flex justify-center items-center h-64 mx-auto w-full">
      <p className="text-5xl font-bold">No tickets found</p>
    </div>
  );
};

export default TicketCard;
