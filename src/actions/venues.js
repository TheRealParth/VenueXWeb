import { venueTypes, configTypes } from '../types';

export const syncVenues = venues => ({
  type: venueTypes.VENUES.SYNC,
  venues
});

export const syncConfig = config => ({
  type: configTypes.CONFIG.SYNC,
  config
});
