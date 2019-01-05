import React, { PureComponent } from 'react';
import moment from 'moment';
import { withFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import EventModalForm from './EventModalForm';
import { withVenueConfig } from '../../containers/VenueConfigProvider';
import generateId from '../../utils/generateId';


class AddEventModal extends PureComponent {

  handleSubmitted = async values => {
    await this.props.firebase.database().ref(`events/${generateId()}`).set({
      start: parseInt(
        moment(
          `${values.dateTimeDuration.date.format('YYYY-MM-DD')} ${values.dateTimeDuration.startTime.format('HH:mm')}`,
          'YYYY-MM-DD HH:mm'
        ).format('X'),
        10
      ) * 1000,
      end: parseInt(
        moment(
          `${values.dateTimeDuration.date.format('YYYY-MM-DD')} ${values.dateTimeDuration.endTime.format('HH:mm')}`,
          'YYYY-MM-DD HH:mm'
        ).format('X'),
        10
      ) * 1000,
      name: values.name,
      notes: values.notes,
      type: values.type,
      room: values.room,
      clientName: values.clientName,
      tableLayout: values.tableLayout,
      guestsPerTable: values.guestsPerTable,
      minimumGuests: values.minimumGuests,
      owner: values.consultants.owner,
      consultants: values.consultants.picked.filter(id => id !== values.consultants.owner),
      firstPaymentDue: parseInt(values.firstPaymentDue.format('X'), 10) * 1000,
      secondPaymentDue: parseInt(values.secondPaymentDue.format('X'), 10) * 1000,
      thirdPaymentDue: parseInt(values.thirdPaymentDue.format('X'), 10) * 1000,
      ceremonyKind: values.ceremonyKind,
      venueId: this.props.venueConfig.id,
    });
    this.props.onClose();
  }

  render() {
    return (
      <EventModalForm onSubmit={this.handleSubmitted} {...this.props} />
    );
  }
}

export default AddEventModal;
