import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import styled from 'styled-components';
import Switch from '../form/Switch';
import Button from '../Button';
import Modal from '../Modal';
import ConsultantsPicker from '../form/ConsultantsPicker';
import {
  DateTimeDurationFilled,
  OwnerSelectedValidator,
  NotEmptyValidator
} from '../../utils/formValidators';
import Select from '../form/Select';
import Textarea from '../form/Textarea';
import DateTimeDurationField from '../form/DateTimeDurationField';
import DatePickerField from '../form/DatePickerField';
import Input from '../form/Input';
import TitleInput from '../form/TitleInput';
import AddButton from '../AddButton';
import Icons from '../../assets/icons';

const Header = styled.div`
  padding: 30px 0px;
  font-size: 24px;
  text-align: center;
  color: #181818;
  width: 700px;
  height: 110px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(188, 172, 150, 0.4);
  font-family: Lora;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.6px;
  text-align: center;
  color: #181818;
`;
//background-color: ${props => props.theme.colors.primary}66;
const Content = styled.div`
  padding: 20px 50px;
  overflow: scroll;
`;

const Help = styled.div`
  text-align: right;
  color: #b0b0b0;
`;

const PaymentSchedule = styled.div`
  display: flex;
`;

const Label = styled.div`
  font-size: 15px;
  color: #7d7d7d;
  font-weight: 500;
  padding-top: 20px;
  padding-right: 15px;
`;

const StyledButton = styled(Button)`
  margin: 0px 5px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #c0b59d;
  padding: 16px 20px;
  margin: 20px 0 70px 0px;
`;

const SectionTitle = styled.div`
  background-color: white;
  margin-top: -27px;
  padding: 0px 10px;
  width: fit-content;
  align-self: center;
  color: #c0b59d;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const User = styled.div`
  display: flex;
`;

const UserNumber = styled.div`
  background-color: #c0b59d;
  height: 25px !important;
  width: 25px !important;
  border-radius: 50%;
  padding: 5px;
  text-align: center;
  color: white;
  font-weight: 600;
  align-self: center;
  margin-right: 10px;
`;

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

  addUsers() {
    let { users } = this.state;
    users++;
    this.setState({ users: users });
    console.log('new');
  }

  renderNewUserFields() {
    let { users } = this.state;
    console.log(users);
    let userFields = [];
    for (let i = 0; i < users; i++) {
      userFields.push(i);
    }
    console.log('LOOK HERE', userFields);
    return userFields.map(user => {
      return (
        <User>
          <UserNumber>{user + 1}</UserNumber>
          <Field
            name="clientName"
            label="Client Name:"
            component={Input}
            validate={NotEmptyValidator}
          />
          <Field
            name="clientEmail"
            label="Client Email:"
            component={Input}
            validate={NotEmptyValidator}
          />
        </User>
      );
    });
  }

  addPayment() {
    let { payments } = this.state;
    payments++;
    this.setState({ payments: payments });
    console.log('new');
  }

  renderPaymentFields() {
    let { payments } = this.state;
    let paymentFields = [];
    for (let i = 0; i < payments; i++) {
      paymentFields.push(i);
    }
    return paymentFields.map(payment => {
      return (
        <User>
          <UserNumber>{payment + 1}</UserNumber>
          <Field name="firstPaymentDue" component={Input} validate={NotEmptyValidator} />
        </User>
      );
    });
  }

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
    const { selectedRoom } = this.props;

    return (
      <Modal isOpen={this.props.isOpen} onRequestClose={this.props.onClose} width="700px">
        <Header>
          <div>Add New Event</div>
        </Header>
        <Content>
          {/* <Help>* All fields are required except the Notes.</Help> */}

          {/* <Field
            name="consultants"
            component={ConsultantsPicker}
            validate={OwnerSelectedValidator}
          /> */}
          <Field
            name="name"
            component={TitleInput}
            validate={NotEmptyValidator}
            placeholder="Event Name"
          />
          <Section>
            <SectionTitle>Users</SectionTitle>

            {this.renderNewUserFields()}

            <AddMore onClick={this.addUsers}>
              <div style={{ height: '24px', width: '24px' }}>
                <Icons.Plus />
              </div>
            </AddMore>
          </Section>
          <Section>
            <SectionTitle>Event Staff</SectionTitle>
            <Field
              name="consultant"
              label="Consultant:"
              component={Select}
              validate={NotEmptyValidator}
              options={[
                { value: 'consultant', label: 'Any one selection With Create Event Permissions' }
              ]}
            />
            <Field
              name="eventTeam"
              label="Event Team:"
              component={Select}
              validate={NotEmptyValidator}
              options={[{ value: 'consultant', label: 'Any number of staff in the database' }]}
            />
          </Section>
          <Section>
            <SectionTitle>Event Details</SectionTitle>
            <Field
              name="dateTimeDuration"
              label="Event Date & Time:"
              component={DateTimeDurationField}
              validate={DateTimeDurationFilled}
            />

            <Field
              name="minimumGuests"
              label="Guest Minimum:"
              component={Input}
              type="number"
              validate={NotEmptyValidator}
            />

            <Field
              name="type"
              label="Event Type:"
              component={Select}
              validate={NotEmptyValidator}
              options={[{ value: 'wedding', label: 'Wedding' }]}
            />

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

            <Field
              name="room"
              label="Room:"
              component={Select}
              validate={NotEmptyValidator}
              options={[].map(roomId => ({
                // label: venueConfig.rooms[roomId].name,
                // value: roomId,
              }))}
            />

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
          </Section>

          <Section>
            <SectionTitle>Notes</SectionTitle>
            <Field name="notes" component={Textarea} />
          </Section>
          <Section>
            <SectionTitle>Payment Schedule</SectionTitle>
            {this.renderPaymentFields()}
            <AddMore onClick={this.addPayment}>
              <div style={{ height: '24px', width: '24px' }}>
                <Icons.Plus />
              </div>
            </AddMore>
          </Section>
        </Content>

        <Modal.Footer>
          <StyledButton label="Discard" onClick={this.props.onClose} />
          <StyledButton label="Save" kind="primary" onClick={this.props.handleSubmit} />
        </Modal.Footer>
      </Modal>
    );
  }
}

export default reduxForm({
  form: 'Event form'
})(EventModalForm);
