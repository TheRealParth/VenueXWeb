import React, { PureComponent } from 'react';
import styled from 'styled-components';

import SidebarLayout from '../../components/Sidebar';
import Calendar from '../../components/Calendar';
import AddEventModal from '../../components/events/AddEventModal';
import EventDetailModal from '../../components/events/EventDetailModal';
import moment from 'moment';

const LegendItem = styled.div`
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  &:first-child {
    margin-left: 0px;
  }

  div {
    display: inline-block;
    background-color: ${props =>
    `${props.theme.colors.primary}${props.opacity}`};
    width: 30px;
    border-radius: 2px;
    margin-right: 5px;
    height: 20px;
  }
`;

// const events = {
//   '2018-10-19': [
//     {
//       label: 'It\'s luis birthday!',
//       opacity: 'A6',
//     },
//     {
//       label: 'It\'s luis birthday!',
//       opacity: 'FF',
//     },
//     {
//       label: 'Something else',
//       opacity: '59'
//     },
//     {
//       label: 'It\'s luis birthday!',
//       opacity: 'A6',
//     },
//   ],
//   '2018-10-13': [
//     {
//       label: 'Graduation time',
//       opacity: 'A6',
//     },
//   ],
// };

class Events extends PureComponent {

  state = {
    date: moment(),
    isAddingEvent: false,
  };

  handleNextMonth = () => {
    this.setState({
      date: moment(this.state.date.add(1, 'M')),
    });
  };

  handlePreviousMonth = () => {
    this.setState({
      date: moment(this.state.date.subtract(1, 'M')),
    });
  }

  handleToday = () => {
    this.setState({
      date: moment(),
    });
  };

  handleAdd = () => {
    this.setState({
      isAddingEvent: true,
    });
  }

  render() {
    const { eventsByDate, match } = this.props;
    let event;
    if (this.props.allEvents && match.params.id) {
      event = {
        ...this.props.allEvents[match.params.id],
        id: match.params.id,
      };
    }
    return (
      <SidebarLayout>
        <div style={{ flex: 1, padding: 20 }}>
          <AddEventModal
            isOpen={this.state.isAddingEvent}
            onClose={() => this.setState({ isAddingEvent: false })}
          />
          <EventDetailModal
            event={event}
            top={100}
            bottom="initial"
          />
          <Calendar
            events={eventsByDate}
            date={this.state.date}
            onNextMonth={this.handleNextMonth}
            onPreviousMonth={this.handlePreviousMonth}
            onAdd={this.handleAdd}
            onEventClicked={event => this.props.history.push(`/events/${event.data.id}`)}
            onToday={this.handleToday}
          />
          <div>
            <LegendItem opacity="FF"><div /> = 1st payment</LegendItem>
            <LegendItem opacity="A6"><div /> = 2nd payment</LegendItem>
            <LegendItem opacity="59"><div /> = 3rd payment</LegendItem>
          </div>
        </div>
      </SidebarLayout>
    );
  }
}

export { Events };