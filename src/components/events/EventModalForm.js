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
  NotEmptyValidator,
} from '../../utils/formValidators';
import Select from '../form/Select';
import Textarea from '../form/Textarea';
import DateTimeDurationField from '../form/DateTimeDurationField';
import DatePickerField from '../form/DatePickerField';
import Input from '../form/Input';

const Header = styled.div`
  
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 30px 0px;
  font-size: 24px;
  text-align: center;
  color: #181818;
`;
//background-color: ${props => props.theme.colors.primary}66;
const Content = styled.div`
  padding: 50px;
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


class EventModalForm extends PureComponent {

  componentDidUpdate(prevProps) {
    if (prevProps.selectedLayout !== this.props.selectedLayout) {
      if (!this.props.selectedLayout) {
        this.props.change('guestsPerTable', '');
      } else {

      }
    }
  }

  renderCustomField = (field) => {
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
  }

  render() {
    const { selectedRoom } = this.props;


    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onClose}
      >
        <Header>
          <div>Add New Event</div>
        </Header>
        <Content>
          <Help>* All fields are required except the Notes.</Help>

          <Field
            name="consultants"
            component={ConsultantsPicker}
            validate={OwnerSelectedValidator}
          />

          <Field
            name="name"
            label="Event name"
            component={Input}
            validate={NotEmptyValidator}
          />

          <Field
            name="dateTimeDuration"
            label="Event Date & Time"
            component={DateTimeDurationField}
            validate={DateTimeDurationFilled}
          />

          <Field
            name="minimumGuests"
            label="Guest minimum"
            component={Input}
            type="number"
            validate={NotEmptyValidator}
          />

          <Field
            name="type"
            label="Event Type"
            component={Select}
            validate={NotEmptyValidator}
            options={[
              { value: 'wedding', label: 'Wedding' },
            ]}
          />

          <Field
            name="room"
            label="Room"
            component={Select}
            validate={NotEmptyValidator}
            options={[].map(roomId => ({
              // label: venueConfig.rooms[roomId].name,
              // value: roomId,
            }))}
          />

          {selectedRoom &&
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 4 }}>
                <Field
                  name="tableLayout"
                  label="Table Layout"
                  component={Select}
                  options={
                    [].map(layoutId => ({
                      label: `0 tables`,
                      value: layoutId,
                    }))
                  }
                />
              </div>

              <div style={{ flex: 3 }}>
                <Field
                  name="guestsPerTable"
                  label="Guests per table"
                  component={Input}
                />
              </div>
            </div>}

          <Field
            name="clientName"
            label="Client name"
            component={Input}
            validate={NotEmptyValidator}
          />

          <Field
            name="notes"
            label="Notes"
            component={Textarea}
          />

          <PaymentSchedule>
            <Label>Payment schedule:</Label>
            <div style={{ flex: 1 }}>
              <Field
                label="1st:"
                name="firstPaymentDue"
                component={DatePickerField}
                validate={NotEmptyValidator}
              />
              <Field
                label="2nd:"
                name="secondPaymentDue"
                component={DatePickerField}
                validate={NotEmptyValidator}
              />

              <Field
                label="3rd:"
                name="thirdPaymentDue"
                component={DatePickerField}
                validate={NotEmptyValidator}
              />
            </div>
          </PaymentSchedule>

          <Field
            name="ceremonyKind"
            label="Ceremony"
            component={Select}
            validate={NotEmptyValidator}
            options={[
              {
                label: 'Onsite',
                value: 'onsite',
              },
              {
                label: 'Offsite',
                value: 'offsite',
              }
            ]}
          />


        </Content>

        <Modal.Footer>
          <StyledButton
            label="Discard"
            onClick={this.props.onClose}
          />
          <StyledButton
            label="Save"
            kind="primary"
            onClick={this.props.handleSubmit}
          />
        </Modal.Footer>
      </Modal>
    );
  }
}


export default reduxForm({
  form: 'Event form',
})(EventModalForm);
