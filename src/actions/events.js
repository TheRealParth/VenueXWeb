import { eventTypes } from '../types';

export const syncEvents = events => ({
  type: eventTypes.EVENTS.SYNC,
  events
});

export const getEventsRequest = () => {
  return {
    type: eventTypes.GET_EVENTS_REQUEST
  };
};
