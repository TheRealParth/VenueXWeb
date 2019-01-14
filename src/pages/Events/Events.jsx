import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from '../../components/BigCalendar';
import moment from 'moment';
import '../../components/BigCalendar/less/styles.scss';
import AddEventModal from '../../components/events/AddEventModal';
import InjectStyles from '../../components/InjectStyles';
import Toolbar from '../../components/BigCalendar/Toolbar';

const localizer = BigCalendar.momentLocalizer(moment);
class Events extends Component {
  state = {
    events: [],
    isAddingEvent: false
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
  openAddingModal = () => this.setState({ isAddingEvent: true });
  closeAddingModal = () => this.setState({ isAddingEvent: false });
  selectEventHandler = event => {
    console.log(event);
  };
  render() {
    const { events, isAddingEvent } = this.state;
    const { currentUser } = this.props;
    return (
      <>
        <AddEventModal
          isOpen={isAddingEvent}
          onClose={this.closeAddingModal}
        />
        <BigCalendar
          onSelectEvent={this.selectEventHandler}
          localizer={localizer}
          components={{
            toolbar: (props) => <Toolbar
              {...props}
              currentUser={currentUser}
              openModal={this.openAddingModal}
            />
          }}
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
