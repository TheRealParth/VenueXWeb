import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from '../../components/BigCalendar';
import moment from 'moment';
import '../../components/BigCalendar/less/styles.scss';

const localizer = BigCalendar.momentLocalizer(moment);
class Events extends Component {
  state = {
    events: []
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
        <style>{`

        `}</style>
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
