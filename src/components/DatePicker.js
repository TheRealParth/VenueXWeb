import React from 'react';
import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';

const DatePickerWrapper = styled.div`
  .react-datepicker {
    border: none;
    border-radius: 2px;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 5px 10px;
    font-family: inherit;

    ${props => props.showTimeSelect && css`
      padding: 0px;
    `}
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__header {
    background-color: #FFF;
    border-bottom: none;
  }

  .react-datepicker__current-month {
    padding: 15px 0px;
    font-weight: 500;
    
  }

  .react-datepicker__navigation {
    top: 25px;
  }

  .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
    width: 2.1rem;
    color: #7d7d7d;
    font-size: 14px;
  }

  .react-datepicker__day--today {
    width: 1.9rem;
    height: 1.9rem;
    line-height: 1.9rem;
    border-radius: 50%;
    background-color: #000;
    color: #FFF;
  }

  .react-datepicker__navigation--previous {
    left: 20px;
  }

  .react-datepicker__navigation--next {
    right: 20px;
  }

  .react-datepicker__day-name {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .react-datepicker__input-container {
    input {
      border: none;
      border-bottom: solid 1px #d8d8d8;

      ${props => props.meta && props.meta.error && props.meta.touched && css`
        border-bottom: solid 1px #c02026;
      `}

      &:focus {
        outline: 0;
      }
    }
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    padding: 0px;
  }

  react-datepicker__time-list {
    padding: 0px;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
    padding: 0px;
  }

  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
    padding: 15px 0px;

    &:hover {
      background-color: ${props => props.theme.colors.primary}33;
    }
  }

  ${props => props.showTimeSelect && css`
    input {
      width: 80px;
    }
  `}

  ${props => props.width && css`
    input {
      width: ${props.width};
    }
  `}

`;


export default props => (
  <DatePickerWrapper {...props}>
    <DatePicker {...props} />
  </DatePickerWrapper>
);
