import TicketForm from '../../(components)/TicketForm';

const getTicket = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch ticket');
    }

    return await res.json();
  } catch (err) {
    return new Error('Failed to fetch ticket', err);
  }
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params?.id === 'new' ? false : true;
  let updatedData = {};
  if (EDITMODE) {
    updatedData = await getTicket(params.id);
  }

  return (
    <div>
      <TicketForm oldData={updatedData || {}} />
    </div>
  );
};

export default TicketPage;
