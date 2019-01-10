import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from '../../components/BigCalendar';
import moment from 'moment';
import '../../components/BigCalendar/less/styles.scss';
import PersonalMenu from '../../components/PersonalMenu';
import AddButton from '../../components/AddButton';
import AddEventModal from '../../components/events/AddEventModal';
import InjectStyles from '../../components/InjectStyles';

const localizer = BigCalendar.momentLocalizer(moment);
class Events extends Component {
  state = {
    events: [],
    isAddingEvent: true
  };
  componentDidMount() {
    this.props.getEventsRequest();
  }
  componentDidUpdate({ events: prevEvents }) {
    const { events } = this.props;
    if (prevEvents !== events) {
      console.log('EVENT UPDATED');
      console.log(events);
      this.setState({ events });
    }
  }
  selectEventHandler = event => {
    console.log(event);
  };
  render() {
    const { events } = this.state;
    return (
      <>
        <AddEventModal
          isOpen={this.state.isAddingEvent}
          onClose={() => this.setState({ isAddingEvent: false })}
        />
        <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
          <PersonalMenu {...this.props.currentUser} />
          <AddButton onClick={() => console.log('start here')} />
        </div>

        <BigCalendar
          onSelectEvent={this.selectEventHandler}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          views={['month']}
          popup
          formats={{
            dateFormat: 'D'
          }}
        />
        <InjectStyles />
      </>
    );
  }
}
Events.propTypes = {
  events: PropTypes.object.isRequired,
  getEventsRequest: PropTypes.func.isRequired
};
Events.defaultProps = {
  events: [],
  getEventsRequest: () => ({})
};
export { Events };
