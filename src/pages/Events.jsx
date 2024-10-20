import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Events.Module.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const initialEvents = [
  {
    title: 'Big Meeting',
    start: new Date(2024, 9, 18, 10, 0),
    end: new Date(2024, 9, 18, 12, 30),
  },
  {
    title: 'Conference',
    start: new Date(2024, 9, 19, 9, 0),
    end: new Date(2024, 9, 19, 17, 0),
  },
  {
    title: 'New Launch Ticket',
    start: new Date(2024, 9, 10, 9, 0),
    end: new Date(2024, 9, 12, 17, 0),
  },
  {
    title: 'Backup All Data',
    start: new Date(2024, 9, 20, 9, 0),
    end: new Date(2024, 9, 21, 17, 0),
  },
];

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Format date for datetime-local input
  const formatDateForInput = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().slice(0, 16);
  };

  // Add Event
  const handleAddEvent = () => {
    setEvents([
      ...events,
      {
        ...newEvent,
        start: new Date(newEvent.start),
        end: new Date(newEvent.end),
      },
    ]);
    setNewEvent({ title: '', start: '', end: '' });
  };

  // Edit Event
  const handleEditEvent = (event) => {
    setNewEvent({
      title: event.title,
      start: formatDateForInput(event.start),
      end: formatDateForInput(event.end),
    });
    setSelectedEvent(event);
  };

  // Update Event
  const handleUpdateEvent = () => {
    setEvents(
      events.map((event) =>
        event === selectedEvent
          ? {
              ...newEvent,
              start: new Date(newEvent.start),
              end: new Date(newEvent.end),
            }
          : event
      )
    );
    setNewEvent({ title: '', start: '', end: '' });
    setSelectedEvent(null);
  };

  // Delete Event
  const handleDeleteEvent = (eventToDelete) => {
    setEvents(events.filter((event) => event !== eventToDelete));
    setSelectedEvent(null);
  };

  return (
    <div className='w-full max-h-screen overflow-y-auto bg-[#111525]'>
      <div className='container px-4 pt-1 mx-auto lg:px-16 md:px-9'>
        <div className='lg:p-3 '>
          <Calendar
            className='bg-[#161b2e] text-cyan-500 w-full'
            localizer={localizer}
            events={events}
            startAccessor='start'
            endAccessor='end'
            style={{ height: 500 }}
            onSelectEvent={(event) => handleEditEvent(event)}
          />

          {/* Add Event Form */}
          <div className='flex flex-col items-center justify-center mt-3 space-y-3 lg:space-y-0 md:space-y-0 lg:space-x-3 md:space-x-3 lg:flex-row md:flex-row'>
            <input
              className='p-2 rounded-3xl'
              type='text'
              placeholder='Event Title'
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />

            <input
              className='w-full p-2 lg:w-36 md:w-36 rounded-3xl'
              type='datetime-local'
              value={newEvent.start}
              onChange={(e) =>
                setNewEvent({ ...newEvent, start: e.target.value })
              }
            />

            <input
              className='w-full p-2 lg:w-36 md:w-36 rounded-3xl'
              type='datetime-local'
              value={newEvent.end}
              onChange={(e) =>
                setNewEvent({ ...newEvent, end: e.target.value })
              }
            />

            {selectedEvent ? (
              <button
                className='p-2 text-white bg-blue-500 rounded-full'
                onClick={handleUpdateEvent}
              >
                Update
              </button>
            ) : (
              <button
                className='p-2 text-white bg-green-500 rounded-full'
                onClick={handleAddEvent}
              >
                Add
              </button>
            )}

            {/* Delete Event */}

            
            {selectedEvent && (
            <button
              className='p-2 text-white bg-red-500 rounded-3xl'
              onClick={() => handleDeleteEvent(selectedEvent)}
            >
              Delete
            </button>
          )}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Events;
