import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BillingTable from '../../components/BillingTable';

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isOpen: false
    };
  }
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

  render() {
    const { events } = this.state;
    return (
      <>
        <div style={{ backgroundColor: '#fafafa' }}>
          <BillingTable events={events} />
        </div>
      </>
    );
  }
}

export { Billing };
