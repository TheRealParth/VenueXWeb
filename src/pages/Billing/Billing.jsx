import React, { Component } from 'react';
import BillingHeader from '../../components/BillingHeader';
import BillingSummary from '../../components/BillingSummary';
import BillingTable from '../../components/BillingTable';
import InjectStyles from '../../components/InjectStyles';
import moment from 'moment';
class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isOpen: false,
      currentDate: moment(Date.now())
    };
  }
  componentDidMount() {
    this.props.getEventsRequest();
    this.props.setEventsSortKey('client', 'asc');
  }
  handleNextMonth = () => {
    this.setState({
      currentDate: moment(this.state.currentDate.add(1, 'M'))
    });
  };
  handlePrevMonth = () => {
    this.setState({
      currentDate: moment(this.state.currentDate.subtract(1, 'M'))
    });
  };
  eventsThisMonth = () => {
    const currentMonth = this.state.currentDate.format('YYYY-MM');
    const eventsThisMonth = this.props.sortedEvents.filter(event => {
      const eventMonth = moment(event.start).format('YYYY-MM');
      return eventMonth === currentMonth;
    });
    return eventsThisMonth;
  };
  render() {
    const { events } = this.props;
    const { currentDate } = this.state;
    const eventsThisMonth = this.eventsThisMonth();
    let dueDate = moment(currentDate).add(1, 'M');
    const totalGuests = eventsThisMonth.reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue.guests || 0, 10),
      0
    );

    const price = this.props.config.price;
    let balance = this.props.config.balance;
    if (!this.props.config.balance) {
      balance =
        this.props.config.billingMethod === 'payPerGuest'
          ? totalGuests * price
          : price * eventsThisMonth.length;
    }

    const daysUntilDue = dueDate.diff(moment(), 'days');

    return (
      <>
        <BillingHeader
          {...this.props}
          handleNextMonth={this.handleNextMonth}
          handlePrevMonth={this.handlePrevMonth}
          label={currentDate.format('MMMM YYYY')}
        />
        <BillingSummary
          totalGuests={totalGuests}
          totalEvents={eventsThisMonth.length}
          dueDate={dueDate}
          balance={balance}
          daysUntilDue={daysUntilDue}
        />
        <div style={{ backgroundColor: '#fafafa' }}>
          <BillingTable
            setEventsSortKey={this.props.setEventsSortKey}
            sort={this.props.sort}
            events={eventsThisMonth}
          />
        </div>
        <InjectStyles />
      </>
    );
  }
}

export { Billing };
