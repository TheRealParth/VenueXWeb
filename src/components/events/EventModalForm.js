import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from 'styled-components';
import Switch from '../form/Switch';
import Button from '../Button';
import Modal from '../Modal';
import { DateTimeDurationFilled, NotEmptyValidator } from '../../utils/formValidators';
import Select from '../form/Select';
import MultiSelect from '../form/MultiSelect';
import Textarea from '../form/Textarea';
import DateTimeDurationField from '../form/DateTimeDurationField';
import Input from '../form/Input';
import TitleInput from '../form/TitleInput';
import SmallInput from '../form/SmallInput';
import Icons from '../../assets/icons';
import {
  AddEventModalHeader,
  AddEventModalContent,
  AddEventModalSection
} from './index.module.scss';

//may want to add help text, tbd, leaving for now
const Help = styled.div`
  text-align: right;
  color: #b0b0b0;
`;

//from old code, not sure if needed
const StyledButton = styled(Button)`
  margin: 0px 5px;
`;

//Individual section styling
const Section = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c0b59d66;
  padding: 16px 20px;
  margin: 20px 0 45px 0px;
`;

// section title styling,
const SectionTitle = styled.div`
  background-color: white;
  margin-top: -27px;
  padding: 0px 10px;
  width: fit-content;
  align-self: center;
  color: #222222;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

//bad naming, used also for payment fields

const User = styled.div`
  display: flex;
  animation: fadeIn 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      diplay: none;
    }
    100% {
      opacity: 1;
    }
  }
`;
//bad naming, used also for payment fields
//TO-DO: make real circle, current version is uneven
const UserNumber = styled.div`
  border: 1px solid #7d7d7d;
  height: 25px !important;
  width: 25px !important;
  min-width: 25px;
  border-radius: 50%;
  padding: 5px;
  text-align: center;
  color: #7d7d7d;
  font-weight: 600;
  align-self: center;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//styling plus button for the add more of users & payment fields
// TO-DO: add space on left and right
const AddMore = styled.div`
  align-self: center;
  margin-bottom: -29px;
  background-color: white;
  border: 1px solid #c0b59d;
  border-radius: 100%;
  padding: 4px;
  margin: 0px 5px -33px 5px;
  cursor: pointer;
`;

class EventModalForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { users: 1, payments: 1 };
    this.addUsers = this.addUsers.bind(this);
    this.addPayment = this.addPayment.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedLayout !== this.props.selectedLayout) {
      if (!this.props.selectedLayout) {
        this.props.change('guestsPerTable', '');
      } else {
      }
    }
  }

  // function to add additional user lines
  addUsers() {
    let { users } = this.state;
    users++;
    this.setState({ users: users++ });
  }

  // function to render user lines
  //TO-DO: Add Space between Client Name & Email.
  // Make it so if client Name is entered, email is required.
  // allow deleting of specific row

  renderNewUserFields() {
    let { users } = this.state;
    let userFields = [];
    for (let i = 0; i < users; i++) {
      userFields.push(i);
    }
    return userFields.map(user => {
      return (
        <User>
          <Icons.User
            style={{
              alignSelf: 'center',
              backgroundColor: '#c4c4c4',
              borderRadius: '50%',
              minWidth: '25px',
              padding: '3px',
              marginRight: '10px'
            }}
            size={25}
            color="#fff"
          />
          <SmallInput
            name={'clientName' + user + 1}
            placeholder="Client Name"
            component={Input}
            validate={user === 0 ? NotEmptyValidator : ''}
          // only first one is needed
          />
          <SmallInput
            name={'clientEmail' + user + 1}
            placeholder="Client Email"
            component={Input}
            validate={user === 0 ? NotEmptyValidator : ''}
          /* current validator is set to require a minimum of one client, but needs to validate email if client Name is entered */
          />
        </User>
      );
    });
  }

  // function to add additional user lines
  addPayment() {
    let { payments } = this.state;
    payments++;
    this.setState({ payments: payments });
  }

  // function to render additional payment fields
  // TO-DO: make date picker, not regular input. Style to fit better.
  renderPaymentFields() {
    let { payments } = this.state;
    let paymentFields = [];
    for (let i = 0; i < payments; i++) {
      paymentFields.push(i);
    }
    return paymentFields.map(payment => {
      return (
        <User>
          <Field
            label={payment + 1 + 'st' + ' Payment Date:'}
            name={'payment' + payment + 1}
            component={Input}
            validate={NotEmptyValidator}
          />
        </User>
      );
    });
  }

  // from old code, renders custom fields, not a current priority, but will want to add soon
  renderCustomField = field => {
    let FieldComponent;
    let validators;
    switch (field.kind) {
      case 'string':
        FieldComponent = Input;
        validators = NotEmptyValidator;
        break;
      case 'select':
        FieldComponent = Select;
        validators = NotEmptyValidator;
        break;
      case 'boolean':
        FieldComponent = Switch;
        break;
      default:
        FieldComponent = Input;
        validators = NotEmptyValidator;
    }

    return (
      <Field
        name={field.id}
        label={field.label}
        options={field.options}
        component={FieldComponent}
        validate={validators}
      />
    );
  };

  render() {
    const { selectedRoom, type, config } = this.props;

    console.log('HERE', this.props);
    let rooms = [];
    let primaryColor;
    let eventTypes = [];
    if (config.theme !== undefined) {
      primaryColor = config.theme.colors.primary;
      for (let room in config.rooms) {
        rooms.push(config.rooms[room]);
      }
      for (let type in config.eventTypes) {
        eventTypes.push(config.eventTypes[type]);
      }
    }

    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={this.props.onClose} width="610px">
        <div className={AddEventModalHeader}>
          <div>Add New Event</div>
        </div>
        <div className={AddEventModalContent}>
          <Field
            name="name"
            component={TitleInput}
            validate={NotEmptyValidator}
            placeholder="Event Name"
          />

          <div className={AddEventModalSection}>
            <SectionTitle>Users</SectionTitle>

            {this.renderNewUserFields()}

            <AddMore onClick={this.addUsers}>
              <div style={{ height: '24px', width: '24px' }}>
                <Icons.Plus />
              </div>
            </AddMore>
          </div>
          <div className={AddEventModalSection}>
            <SectionTitle>Event Staff</SectionTitle>

            <Field
              name="consultant"
              component={props => (
                <Select
                  value={props.input.value}
                  onChange={props.input.onChange}
                  primaryColor={primaryColor}
                  options={this.props.users.map(({ id, fullName }) => ({
                    value: id,
                    label: fullName
                  }))}
                  label="Consultant:"
                />
              )}
              placeholder="Current User"
              validate={NotEmptyValidator}
              options={this.props.users
                .filter(({ permissions }) => permissions.createAndEditEvents)
                .map(({ id, fullName }) => ({ value: id, label: fullName }))}
            />
            <Field
              name="eventTeam"
              component={props => (
                <MultiSelect
                  value={props.input.value}
                  onChange={props.input.onChange}
                  primaryColor={primaryColor}
                  options={this.props.users.map(({ id, fullName }) => ({
                    value: id,
                    label: fullName
                  }))}
                  label="Event Team:"
                />
              )}
              type="select"
              validate={NotEmptyValidator}
              options={this.props.users.map(({ id, fullName }) => ({ value: id, label: fullName }))}
            />
          </div>
          <div className={AddEventModalSection}>
            <SectionTitle>Event Details</SectionTitle>
            <Field
              name="dateTimeDuration"
              label="Event Date & Time:"
              component={DateTimeDurationField}
              validate={DateTimeDurationFilled}
            />
            <User>
              <Field
                name="type"
                component={props => (
                  <Select
                    value={props.input.value}
                    onChange={props.input.onChange}
                    primaryColor={primaryColor}
                    options={
                      config
                        ? eventTypes.map(type => ({
                          label: type.name,
                          value: type.typeId
                        }))
                        : []
                    }
                    label="Event Type:"
                  />
                )}
                validate={NotEmptyValidator}
              />
              <Field
                name="minimumGuests"
                label="Guest Minimum:"
                component={Input}
                type="number"
                validate={NotEmptyValidator}
              />
            </User>

            {type === 'wedding' ? (
              <Field
                name="ceremonyKind"
                label="Ceremony:"
                component={Select}
                validate={NotEmptyValidator}
                options={[
                  {
                    label: 'Onsite',
                    value: 'onsite'
                  },
                  {
                    label: 'Offsite',
                    value: 'offsite'
                  }
                ]}
              />
            ) : (
                ''
              )}
            <User>
              <Field
                name="room"
                component={props => (
                  <Select
                    value={props.input.value}
                    onChange={props.input.onChange}
                    primaryColor={primaryColor}
                    options={
                      config
                        ? rooms.map(room => ({
                          label: room.name,
                          value: room.roomId
                        }))
                        : []
                    }
                    label="Room:"
                  />
                )}
                validate={NotEmptyValidator}
              />
              <Field
                name="layout"
                component={props => (
                  <Select
                    value={props.input.value}
                    onChange={props.input.onChange}
                    primaryColor={primaryColor}
                    options={
                      config
                        ? rooms.map(room => ({
                          label: room.name,
                          value: room.roomId
                        }))
                        : []
                    }
                    label="Layout:"
                  />
                )}
                validate={NotEmptyValidator}
              />
            </User>

            {selectedRoom && (
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 4 }}>
                  <Field
                    name="tableLayout"
                    label="Room Table Layout:"
                    component={Select}
                    options={[].map(layoutId => ({
                      label: `0 tables`,
                      value: layoutId
                    }))}
                  />
                </div>

                <div style={{ flex: 3 }}>
                  <Field name="guestsPerTable" label="Guests per table" component={Input} />
                </div>
              </div>
            )}
          </div>

          <div className={AddEventModalSection}>
            <SectionTitle>Payment Schedule</SectionTitle>
            {this.renderPaymentFields()}
            <AddMore onClick={this.addPayment}>
              <div style={{ height: '24px', width: '24px' }}>
                <Icons.Plus />
              </div>
            </AddMore>
          </div>
          <div className={AddEventModalSection}>
            <SectionTitle>Notes</SectionTitle>
            <Field name="notes" component={Textarea} />
          </div>
        </div>

        <Modal.Footer>
          <StyledButton label="Discard" onClick={this.props.onClose} />
          <StyledButton label="Save" kind="primary" onClick={this.props.handleSubmit} />
        </Modal.Footer>
      </Modal>
    );
  }
}

EventModalForm = reduxForm({
  form: 'EventForm'
})(EventModalForm);
const selector = formValueSelector('EventForm');
export default connect(state => {
  // can select values individually
  const formValues = selector(state, 'eventTeam', 'consultant');
  // const favoriteColorValue = selector(state, 'favoriteColor')
  // or together as a group
  // const { firstName, lastName } = selector(state, 'firstName', 'lastName')
  return {
    ...formValues
  };
})(EventModalForm);
