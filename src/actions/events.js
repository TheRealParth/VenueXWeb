import { eventTypes } from '../types';

export const syncEvents = events => ({
  type: eventTypes.EVENTS.SYNC,
  events
});
