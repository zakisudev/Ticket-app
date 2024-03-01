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

      if (res.status === 200) {
        router.refresh();
      } else {
        console.log('Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};
export default DeleteBlock;
