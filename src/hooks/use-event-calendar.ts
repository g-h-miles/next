import { atom, useAtom } from 'jotai';
import uniqueId from 'lodash/uniqueId';
import { CalendarEvent } from '@/types';

const event = [
  {
    id: uniqueId(),
    start: new Date(),
    end: new Date(),
    allDay: false,
    title: 'Meeting with Paige',
    description: 'About Planning',
    location: `At Paige's place`,
  },
];

export const eventAtom = atom<CalendarEvent[]>(event);

export default function useEventCalendar() {
  const [events, setEvents] = useAtom(eventAtom);

  function createEvent(event: CalendarEvent) {
    setEvents((prev) => [...prev, event]);
  }

  function updateEvent(updatedEvent: CalendarEvent) {
    // Use map to replace the object with the same id
    const updatedEvents = events.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent; // replace with the updated object
      }
      return event; // keep the original object
    });
    setEvents(updatedEvents);
  }

  function deleteEvent(eventID: string) {
    // Use filter to create a new array without the event to be deleted
    const updatedEvents = events.filter((event) => event.id !== eventID);

    // Update the state with the new array of events
    setEvents(updatedEvents);
  }

  return { events, setEvents, createEvent, updateEvent, deleteEvent };
}
