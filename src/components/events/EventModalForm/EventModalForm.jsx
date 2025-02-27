import React, { Component } from 'react';
import uuid from 'uuid';
import { Field } from 'redux-form';
import styled from 'styled-components';
import Switch from '../../form/Switch';
import Button from '../../Button';
import Modal from '../../Modal';
import { DateTimeDurationFilled, NotEmptyValidator } from '../../../utils/formValidators';
import Select from '../../form/Select';
import MultiSelect from '../../form/MultiSelect';
import Textarea from '../../form/Textarea';
import DateTimeDurationField from '../../form/DateTimeDurationField';
import Input from '../../form/Input';
import TitleInput from '../../form/TitleInput';
import SmallInput from '../../form/SmallInput';
import Icons from '../../../assets/icons';
import {
  AddEventModalHeader,
  AddEventModalContent,
  AddEventModalSection,
  UserChip,
  CloseButton,
  SectionTitle,
  User,
  ChipContainer,
  AddMore
} from './index.module.scss';


//from old code, not sure if needed
const StyledButton = styled(Button)`
  margin: 0px 5px;
`;


//bad naming, used also for payment fields
//TO-DO: make real circle, current version is uneven

//styling plus button for the add more of users & payment fields
// TO-DO: add space on left and right

class EventModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsers: [],
      currentNewUser: {
        name: '',
        email: ''
      },
      users: 1,
      payments: 1
    };
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
  handleNewUser = () => {
    const { name, email } = this.state.currentNewUser;
    if (name && email) {
      this.setState({
        newUsers: [
          ...this.state.newUsers,
          {
            id: uuid(),
            name,
            email
          }
        ]
      })
      this.setState({
        currentNewUser: {
          name: '',
          email: ''
        }
      })
    }
  }
  handleRemoveNewUser = (id) => {
    this.setState({
      newUsers: this.state.newUsers.filter((user) => user.id !== id),
    })
  }
  renderNewUserFields() {
    const { newUsers } = this.state;
    return (
      <>
        <div className={ChipContainer}>
          {
            newUsers.map(({ name, email, id }) => (
              <div className={UserChip} key={id}>
                {`${name} (${email})`}
                <span onClick={() => this.handleRemoveNewUser(id)} className={CloseButton}>&times;</span>
              </div>
            ))
          }
        </div>
        <div className={User}>
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
            name={'clientName'}
            placeholder="Client Name"
            component={Input}
            value={this.state.currentNewUser.name}
            // validate={user === 0 ? NotEmptyValidator : ''}
            // only first one is needed
            onChange={(e) => this.setState({
              currentNewUser: {
                ...this.state.currentNewUser,
                name: e.target.value
              }
            })}
          />
          <SmallInput
            name={'clientEmail'}
            placeholder="Client Email"
            component={Input}
            value={this.state.currentNewUser.email}
            onChange={(e) => this.setState({
              currentNewUser: {
                ...this.state.currentNewUser,
                email: e.target.value
              }
            })}
            onBlur={this.handleNewUser}
          // validate={user === 0 ? NotEmptyValidator : ''}
          /* current validator is set to require a minimum of one client, but needs to validate email if client Name is entered */
          />
        </div>
      </>
    );
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
        <div className={User}>
          <Field
            label={payment + 1 + 'st' + ' Payment Date:'}
            name={'payment' + payment + 1}
            component={Input}
            validate={NotEmptyValidator}
          />
        </div>
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
    if (config.theme) {
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
            <div className={SectionTitle}>Users</div>

            {this.renderNewUserFields()}

            <div className={AddMore} onClick={this.addUsers}>
              <div style={{ height: '24px', width: '24px' }}>
                <Icons.Plus />
              </div>
            </div>
          </div>
          <div className={AddEventModalSection}>
            <div className={SectionTitle}>Event Staff</div>

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
            <div className={SectionTitle}>Event Details</div>
            <Field
              name="dateTimeDuration"
              label="Event Date & Time:"
              component={DateTimeDurationField}
              validate={DateTimeDurationFilled}
            />
            <div className={User}>
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
            </div>

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
            <div className={User}>
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
            </div>

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
            <div className={SectionTitle}>Payment Schedule</div>
            {this.renderPaymentFields()}
            <div className={AddMore} onClick={this.addPayment}>
              <div style={{ height: '24px', width: '24px' }}>
                <Icons.Plus />
              </div>
            </div>
          </div>
          <div className={AddEventModalSection}>
            <div className={SectionTitle}>Notes</div>
            <Field name="notes" component={Textarea} />
          </div>
        </div>

        <Modal.Footer>
          <StyledButton label="Discard" onClick={this.props.onClose} />
          <StyledButton label="Save" kind="primary" onClick={(values) => this.props.handleSubmit({ ...values, newUsers: this.state.newUsers })} />
        </Modal.Footer>
      </Modal>
    );
  }
}

export { EventModalForm }