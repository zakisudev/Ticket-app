'use client';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    try {
      const res = await fetch(`https://tickets.zakisu.tech/api/tickets/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Unable to delete ticket');
      }

      router.push('/');
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200 p-2 z-50"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
