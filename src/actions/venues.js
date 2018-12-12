import { venueTypes } from '../types';

export const syncVenues = venues => ({
  type: venueTypes.VENUES.SYNC,
  venues
});
