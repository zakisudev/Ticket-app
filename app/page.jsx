import Link from 'next/link';
import DeleteBlock from './(components)/DeleteBlock';
import PriorityDisplay from './(components)/PriorityDisplay';
import ProgressDisplay from './(components)/ProgressDisplay';
import StatusDisplay from './(components)/StatusDisplay';

const getTickets = async () => {
  try {
    const res = await fetch(`https://tickets.zakisu.tech/api/tickets`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch tickets');
    }

    return await res.json();
  } catch (err) {
    return new Error('Failed to fetch tickets', err);
  }
};

const Dashboard = async () => {
  const tickets = await getTickets();

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

  return (
    <div className="p-5">
      {tickets && tickets?.length > 0 ? (
        uniqCat?.map((cat, catIdx) => (
          <div className="mb-4" key={catIdx}>
            <h2>{cat}</h2>
            <div className="lg:grid grid-cols-3 xl:grid-cols-5">
              {tickets
                .filter((ticket) => ticket.category === cat)
                .map((ticket) => (
                  <Link
                    href={`/TicketPage/${ticket._id}`}
                    key={ticket._id}
                    className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2 z-0"
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
                        <p className="text-xs my-1">
                          {formatTime(ticket?.createdAt)}
                        </p>
                        <ProgressDisplay progress={ticket.progress} />
                      </div>
                      <div className="flex ml-auto items-end">
                        <StatusDisplay status={ticket.status} />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-64 mx-auto w-full">
          No tickets found
        </div>
      )}
    </div>
  );
};

export default Dashboard;
