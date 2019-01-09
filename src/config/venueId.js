import urlToVenueId from '../helpers/urlToVenuId';

if (process.env.NODE_ENV === 'development') window.__VENUEX_VENUE_ID = 'demo';

const venueId = process.env.REACT_APP_VENUE_ID
  || window.__VENUEX_VENUE_ID
  || urlToVenueId(window.location.href);

export default venueId;
