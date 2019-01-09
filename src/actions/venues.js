import { venueTypes, configTypes } from '../types';

export const syncVenues = venues => ({
  type: venueTypes.VENUES.SYNC,
  venues
});

export const syncConfig = config => {
  console.log('HERE HERE HERHEERE RER ER')
  console.log('HERE HERE HERHEERE RER ER')
  console.log('HERE HERE HERHEERE RER ER')
  console.log('HERE HERE HERHEERE RER ER')
  console.log('HERE HERE HERHEERE RER ER')
  console.log('HERE HERE HERHEERE RER ER')
  console.log('HERE HERE HERHEERE RER ER')
  console.log('HERE HERE HERHEERE RER ER')
  console.log('HERE HERE HERHEERE RER ER')
  console.log('HERE HERE HERHEERE RER ER')
  console.log(config)
  return ({
    type: configTypes.CONFIG.SYNC,
    config
  });
}
