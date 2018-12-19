import React from 'react';
import CaretLeft from '../assets/icons/CaretLeft';
import CaretRight from '../assets/icons/CaretRight';

const MonthHeader = ({ monthLabel, next, prev }) => (
  <div className="rbc-btn-group">
    <button type="button" className={'rbc-btn-navi-left'} onClick={prev}>
      <CaretLeft height={25} color="#c0b69b" />
    </button>
    <div className="rbc-toolbar-label">{monthLabel}</div>
    <button type="button" className={'rbc-btn-navi-right'} onClick={next}>
      <CaretRight height={25} color="#c0b69b" />
    </button>
  </div>
);

export default MonthHeader;
