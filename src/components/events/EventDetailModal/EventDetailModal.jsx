import React, { PureComponent } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Modal from '../../Modal';
import ConfirmationModal from '../../ConfirmationModal';
import Button from '../../Button';
import SideTabs from '../../SideTabs';
import ConsultantLabel from './Consultant';
import Switch from '../../Switch';
import EventModalForm from '../../events/EventModalForm';
import { humanize } from '../../../utils';
import ringsImage from '../../../assets/rings.svg';
import calendarIcon from '../../../assets/calendar-gray.svg';
import notesIcon from '../../../assets/notes-icon.svg';
import clientDetailsIcon from '../../../assets/client-details-icon.svg';
import Icons from '../../../assets/icons';
import grayRoomIcon from '../../../assets/room-gray.svg';
import {
  EventDetailHeader,
  EventDetailTitle,
  EventBadge,
  EventDetailHeaderContent,
  EventDetailSubtitle,
  ConsultantRow,
  ConsultantTitle,
  ConsultantImage,
  EventDetailContentRow,
  EventDetailPaymentTitle
} from './index.module.scss';

const DescriptionList = styled.dl`
  padding-left: 35px;
  font-weight: 500;
  font-size: 15px;

  .row {
    padding: 10px 0px;
    display: flex;
    align-items: center;
  }

  dt {
    display: inline-block;
    color: #7d7d7d;
    white-space: nowrap;
    letter-spacing: -0.28px;
  }
  dd {
    display: inline-block;
    color: #222222;
    margin-left: 6px;
    letter-spacing: -0.28px;
  }
`;

const Flex = styled.div`
  display: flex;

  .row {
    margin-right: 15px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

const FooterButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  margin: 0 5px;
`;

const ReminderSentLabel = styled.div`
  color: #7d7d7d;
  font-size: 12px;
  text-transform: lowercase;
`;

class EventDetailModal extends PureComponent {
  state = {
    isSendingReminder: false,
    isDeleteConfirmationOpen: false,
    isEditing: false
  };

  handleStartEditing = () => {
    this.setState({
      isEditing: true
    });
  };

  handleEdit = async values => {
    const { event } = this.props;
    const valuesToEdit = {
      start:
        parseInt(
          moment(
            `${values.dateTimeDuration.date.format(
              'YYYY-MM-DD'
            )} ${values.dateTimeDuration.startTime.format('HH:mm')}`,
            'YYYY-MM-DD HH:mm'
          ).format('X'),
          10
        ) * 1000,
      end:
        parseInt(
          moment(
            `${values.dateTimeDuration.date.format(
              'YYYY-MM-DD'
            )} ${values.dateTimeDuration.endTime.format('HH:mm')}`,
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
      ceremonyKind: values.ceremonyKind
    };

    const edits = {};

    Object.keys(valuesToEdit).forEach(key => {
      edits[`/events/${event.id}/${key}`] = valuesToEdit[key];
    });

    await this.props.firebase
      .database()
      .ref()
      .update(edits);

    this.setState({ isEditing: false });
  };

  handleDelete = () => {
    this.setState({
      isDeleteConfirmationOpen: true
    });
  };

  handleCancelDeleting = () => {
    this.setState({
      isDeleteConfirmationOpen: false
    });
  };

  handleConfirmDelete = async () => {
    await this.props.firebase.remove(`/events/${this.props.event.id}`);
    this.props.history.push('/events');
  };

  handleSendReminder = async () => {
    this.setState({
      isSendingReminder: true
    });
    const { firebase } = this.props;
    const sendPaymentReminderMail = firebase.functions().httpsCallable('sendPaymentReminderMail');

    try {
      await sendPaymentReminderMail({
        eventId: this.props.event.id
      });
    } catch (err) {
      const { code, message, details } = err;
      console.log(code, message, details);
    }

    firebase
      .database()
      .ref(`/events/${this.props.event.id}/lastRemindedAt`)
      .set(parseInt(moment().format('X'), 10) * 1000);
    this.setState({
      isSendingReminder: false
    });
  };

  render() {
    const { firebase, config, event, ...restProps } = this.props;
    let venueConfig = config.config;
    if (!event) {
      return <div />;
    }
    let room, numberOfTables, primaryColor;

    /* if (venueConfig.rooms) {
      numberOfTables = venueConfig.rooms.layouts[event.tableLayout];
      room = venueConfig.rooms[event.room];
      console.log('AAAAAAAAAAAAAAAA');
    } */

    if (venueConfig.theme) {
      primaryColor = venueConfig.theme.colors.primary;
    }

    const { guestsPerTable } = event;
    console.log('yo');
    if (this.state.isEditing) {
      return (
        <EventModalForm
          isOpen={Boolean(event)}
          onSubmit={this.handleEdit}
          initialValues={{
            consultants: {
              owner: event.owner,
              picked: [event.owner]
            },
            name: event.name,
            dateTimeDuration: {
              date: moment(event.start),
              startTime: moment(event.start),
              endTime: moment(event.end)
            },
            minimumGuests: event.minimumGuests,
            type: event.type,
            room: event.room,
            tableLayout: event.tableLayout,
            guestsPerTable: event.guestsPerTable,
            clientName: event.clientName,
            notes: event.notes,
            firstPaymentDue: moment(event.firstPaymentDue),
            secondPaymentDue: moment(event.secondPaymentDue),
            thirdPaymentDue: moment(event.thirdPaymentDue),
            ceremonyKind: event.ceremonyKind
          }}
        />
      );
    }
    console.log('event:', event);
    return (
      <Modal {...restProps} isOpen={Boolean(event)} height="530px">
        <div className={EventDetailHeader}>
          <div className={EventBadge}>
            <img src={ringsImage} />
          </div>
          <div className={EventDetailHeaderContent}>
            <div className={EventDetailTitle}>{event.title}</div>
            <div className={EventDetailSubtitle}>
              {moment(event.start).format('dddd MMMM D, YYYY')}
            </div>
          </div>
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <ConfirmationModal
            label="Are you sure you want to delete this event?"
            isOpen={this.state.isDeleteConfirmationOpen}
            onCancel={this.handleCancelDeleting}
            onConfirm={this.handleConfirmDelete}
          />
          <SideTabs
            primaryColor={primaryColor}
            tabs={[
              {
                title: 'Event overview',
                icon: 'CalendarBlank',
                content: (
                  <DescriptionList>
                    <div className={ConsultantRow}>
                      <div className={ConsultantTitle}>Consultant:</div>

                      <img src="https://placehold.it/100x100" className={ConsultantImage} />

                      <div>{event.consultant}</div>
                    </div>

                    <div className={EventDetailContentRow}>
                      <dt>Event Type:</dt>
                      <dd> {event.eventType} </dd>
                      {/* <dd>{humanize(event.type)}</dd> */}
                    </div>

                    {event.eventType === 'wedding' ? (
                      <div className={EventDetailContentRow}>
                        <dt>Ceremony:</dt>
                        <dd>{event.ceremony}</dd>
                      </div>
                    ) : (
                      ''
                    )}
                    <div className={EventDetailContentRow}>
                      <dt>Start Time:</dt>
                      <dd>{moment(event.start).format('h:mm A')}</dd>
                    </div>

                    <div className={EventDetailContentRow}>
                      <dt>End Time:</dt>
                      <dd>{moment(event.end).format('h:mm A')}</dd>
                    </div>
                  </DescriptionList>
                )
              },
              {
                title: 'Client details',
                icon: 'User',
                content: (
                  <DescriptionList>
                    <div className={EventDetailContentRow}>
                      <dt>Client Name:</dt>
                      <dd>{event.client}</dd>
                    </div>

                    <div className={EventDetailContentRow}>
                      <dt>Client Email:</dt>
                      <dd>{event.clientEmail}</dd>
                    </div>

                    <div className={EventDetailContentRow}>
                      <dt>Client Phone:</dt>
                      <dd>{event.clientPhone}</dd>
                    </div>

                    {/*   <div className={EventDetailContentRow} style={{ paddingRight: 15 }}>
                      <dt className={EventDetailPaymentTitle}>Payment:</dt>
                      <dd>
                        <div className={EventDetailContentRow}>
                          <Flex>
                            <div style={{ marginRight: 10 }}>
                              <dt>1st:</dt>
                              <dd>10/01/17</dd>
                            </div>
                            <div>
                              <dt>Paid:</dt>
                              <dd>Y / N</dd>
                            </div>
                          </Flex>
                        </div>
                        <div className={EventDetailContentRow}>
                          <Flex>
                            <div style={{ marginRight: 10 }}>
                              <dt>2st:</dt>
                              <dd>10/01/17</dd>
                            </div>
                            <div>
                              <dt>Paid:</dt>
                              <dd>Y / N</dd>
                            </div>
                          </Flex>
                        </div>
                        <div className={EventDetailContentRow}>
                          <Flex>
                            <div style={{ marginRight: 10 }}>
                              <dt>2st:</dt>
                              <dd>10/01/17</dd>
                            </div>
                            <div>
                              <dt>Paid:</dt>
                              <dd>Y / N</dd>
                            </div>
                          </Flex>
                        </div>
                        <div className={EventDetailContentRow}>
                          <div>
                            <dt>Payment Notification:</dt>
                            <dd>
                              <Switch
                                value={Boolean(event.isPaymentBannerEnabled)}
                                onChange={
                                  newVal => console.log(newVal)
                                  // firebase
                                  //   .database()
                                  //   .ref(`events/${event.id}/isPaymentBannerEnabled`)
                                  //   .set(newVal)
                                }
                              />
                            </dd>
                          </div>
                        </div>
                        <div className={EventDetailContentRow}>
                          <dt>
                            <div>Reminder Email:</div>
                            {event.lastRemindedAt && (
                              <ReminderSentLabel>
                                last sent {moment(event.lastRemindedAt).format('YYYY-MM-DD')}
                              </ReminderSentLabel>
                            )}
                          </dt>
                          <dd>
                            <Button
                              size="small"
                              label={this.state.isSendingReminder ? 'Sending...' : 'Send now'}
                              disabled={this.state.isSendingReminder}
                              onClick={this.handleSendReminder}
                            />
                          </dd>
                        </div>
                      </dd>
                    </div> */}
                  </DescriptionList>
                )
              },
              {
                title: 'Room & Layout',
                icon: 'Room',
                content: (
                  <DescriptionList>
                    <div className={EventDetailContentRow}>
                      <dt>Room:</dt>
                      {event.roomName}
                    </div>
                    <div className={EventDetailContentRow}>
                      <dt>Layout:</dt>
                      <dd>{event.layoutName}</dd>
                    </div>
                    <div className={EventDetailContentRow}>
                      <dt>Minimum Guests:</dt>
                      <dd>{event.guestMinimum}</dd>
                    </div>
                    <div className={EventDetailContentRow}>
                      <dt>Guests Per Table:</dt>
                      <dd>{event.guestsPerTable}</dd>
                    </div>
                  </DescriptionList>
                )
              },
              {
                title: 'Notes',
                icon: 'Notes',
                content: (
                  <DescriptionList>
                    <div className={EventDetailContentRow}>
                      <dt style={{ alignSelf: 'flex-start' }}>Notes:</dt>
                      <dd>{event.eventNotes}</dd>
                    </div>
                  </DescriptionList>
                )
              }
            ]}
          />
        </div>
        <Modal.Footer>
          <FooterButtons>
            <div>
              <StyledButton label="Download seating chart" />
            </div>
            <div>
              <StyledButton label="Delete" kind="danger" onClick={this.handleDelete} />
              <StyledButton label="Edit" onClick={this.handleStartEditing} />
            </div>
          </FooterButtons>
        </Modal.Footer>
      </Modal>
    );
  }
}

export { EventDetailModal };
