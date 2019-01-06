import React, { Component } from 'react';
import BillingHeader from '../../components/BillingHeader';
import BillingSummary from '../../components/BillingSummary';
import BillingTable from '../../components/BillingTable';
import CaretLeft from '../../assets/icons/CaretLeft';
import CaretRight from '../../assets/icons/CaretRight';
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

  render() {
    const { events } = this.state;
    return (
      <>
        <div className="rbc-btn-group" style={{ width: '100%', textAlign: 'center' }}>
          <button
            type="button"
            className={'rbc-btn-navi-left'}
            onClick={() => console.log('PrevMonth')}
          >
            <CaretLeft size={16} color="#c0b69b" />
          </button>

          <div className="rbc-toolbar-label">December</div>

          <button
            type="button"
            className={'rbc-btn-navi-right'}
            onClick={() => console.log('NextMonth')}
          >
            <CaretRight size={16} color="#c0b69b" />
          </button>
        </div>
        <BillingHeader {...this.props} />
        <BillingSummary {...this.props} />
        <div style={{ backgroundColor: '#fafafa' }}>
          <BillingTable events={events} />
        </div>
      </>
    );
  }
}

export { Billing };
