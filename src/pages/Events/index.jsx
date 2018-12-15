import moment from 'moment';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { Events } from './Events';

export default compose(
  firebaseConnect(() => [
    {
      path: 'events',
      queryParams: ['orderByChild=venueId', 'equalTo=test_venue']
    }
  ]),
  connect(state => {
    if (!isLoaded(state.firebase.data.events)) {
      return {
        eventsByDate: {}
      };
    }

    const eventsByDate = {};
    Object.keys(state.firebase.data.events).forEach(eventId => {
      const event = state.firebase.data.events[eventId];
      const eventDate = moment(event.start).format('YYYY-MM-DD');
      const events = eventsByDate[eventDate] || [];
      events.push({
        label: event.name,
        opacity: 'FF',
        data: {
          ...event,
          id: eventId
        }
      });
      eventsByDate[eventDate] = events;
    });

    return {
      eventsByDate,
      allEvents: state.firebase.data.events
    };
  })
)(Events);
