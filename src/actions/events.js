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

export const createEventRequest = event => {
  return {
    type: eventTypes.CREATE_EVENT_REQUEST,
    event
  }
}
export const setEventsSortKey = sortKey => {
  return {
    type: eventTypes.SET_SORT_KEY,
    sortKey
  };
};
