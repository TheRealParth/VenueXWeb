import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);
class Events extends Component {
  state = {
    events: []
  }
  componentDidMount() {
    this.props.getEventsRequest();
  }
  componentDidUpdate({ events: prevEvents }) {
    const { events } = this.props;
    if (prevEvents !== events) {
      console.log('EVENT UPDATED')
      console.log(events)
      this.setState({ events })
    }
  }
  selectEventHandler = (event) => {
    console.log(event)
  }
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
        />
        <style>{`
        .rbc-btn-group:nth-child(3){
          5: none;
        }
        div.rbc-header {
          width: 167px;
          height: 15px;
        }
        div.rbc-header > span  {
          font-family: Montserrat;
          font-size: 12px;
          font-weight: bold;
          font-style: normal;
        }
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
