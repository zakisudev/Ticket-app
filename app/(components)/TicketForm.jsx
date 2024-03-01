'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const TicketForm = ({ oldData }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'not started',
    priority: 1,
    progress: 0,
    category: 'Hardware problem',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (oldData?._id) {
      const res = await fetch(`/api/tickets/${oldData?._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (!res.ok) {
        throw new Error('Something went wrong');
      }

      if (res.status === 200) {
        await res.json();
        router.refresh();
        router.push(`/`);
      }
      return;
    } else {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (!res.ok) {
        throw new Error('Something went wrong');
      }
    }

    router.refresh();
    router.push(`/`);
  };

  useEffect(() => {
    if (oldData === null) return;
    setFormData({
      title: oldData?.title || '',
      description: oldData?.description || '',
      status: oldData?.status || 'not started',
      priority: Number(oldData?.priority) || 1,
      progress: Number(oldData?.progress) || 0,
      category: oldData?.category || 'Hardware problem',
    });
  }, [oldData]);

  return (
    <div className="flex justify-center w-1/4 mx-auto my-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-1 w-full">
        <h3 className="text-center">
          {oldData?._id ? 'Update Ticket' : 'Create your ticket'}
        </h3>
        <label className="mt-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value,
            })
          }
          className="px-2 py-1 rounded text-card"
          required
        />
        <label className="mt-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value,
            })
          }
          rows={3}
          className="px-2 py-1 rounded text-card w-full resize-none"
          required
        />
        <label className="mt-2" htmlFor="priority">
          Priority
        </label>
        <div className="flex gap-5">
          <div className="flex gap-1 items-center">
            <label htmlFor="priority-1">1</label>
            <input
              type="radio"
              id="priority-1"
              name="priority"
              value={1} // Change the value to a number
              onChange={(e) =>
                setFormData({
                  ...formData,
                  priority: 1,
                })
              }
              className="p-1 rounded text-card"
              required
            />
          </div>

          <div className="flex gap-1 items-center">
            <label htmlFor="priority-2">2</label>
            <input
              type="radio"
              id="priority-2"
              name="priority"
              value={2}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  priority: 2,
                })
              }
              className="p-1 rounded text-card"
              required
            />
          </div>

          <div className="flex gap-1 items-center">
            <label htmlFor="priority-3">3</label>
            <input
              type="radio"
              id="priority-3"
              name="priority"
              value={3}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  priority: 3,
                })
              }
              className="p-1 rounded text-card"
              required
            />
          </div>

          <div className="flex gap-1 items-center">
            <label htmlFor="priority-4">4</label>
            <input
              type="radio"
              id="priority-4"
              name="priority"
              value={4}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  priority: 4,
                })
              }
              className="p-1 rounded text-card"
              required
            />
          </div>

          <div className="flex gap-1 items-center">
            <label htmlFor="priority-5">5</label>
            <input
              type="radio"
              id="priority-5"
              name="priority"
              value={5}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  priority: 5,
                })
              }
              className="p-1 rounded text-card"
              required
            />
          </div>
        </div>
        <label className="mt-2" htmlFor="category">
          Category
        </label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({
              ...formData,
              category: e.target.value,
            })
          }
          className="px-2 py-1 rounded text-card"
          required
        >
          <option value="Hardware problem">Hardware problem</option>
          <option value="Software problem">Software problem</option>
          <option value="Network problem">Network problem</option>
        </select>
        <label className="mt-2" htmlFor="progress">
          Progress
        </label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min={0}
          max={5}
          step={1}
          onChange={(e) =>
            setFormData({
              ...formData,
              progress: parseInt(e.target.value),
            })
          }
          className="px-2 py-1 rounded text-card"
          required
        />
        <label className="mt-2" htmlFor="status">
          Status
        </label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value,
            })
          }
          className="px-2 py-1 rounded text-card"
          required
        >
          <option value="not-started">Not started</option>
          <option value="in-progress">In progress</option>
          <option value="completed">Completed</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
        >
          {oldData._id ? 'Update Ticket' : 'Create Ticket'}
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
