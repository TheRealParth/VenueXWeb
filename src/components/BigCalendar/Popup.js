import PropTypes from 'prop-types';
import React from 'react';
import getOffset from 'dom-helpers/query/offset';
import getScrollTop from 'dom-helpers/query/scrollTop';
import getScrollLeft from 'dom-helpers/query/scrollLeft';
import dates from './utils/dates';
import Icons from '../../assets/icons';
import EventCell from './EventCell';
import { isSelected } from './utils/selection';

const propTypes = {
  position: PropTypes.object,
  popupOffset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    })
  ]),
  events: PropTypes.array,
  selected: PropTypes.object,

  accessors: PropTypes.object.isRequired,
  components: PropTypes.object.isRequired,
  getters: PropTypes.object.isRequired,
  localizer: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  onDoubleClick: PropTypes.func,
  slotStart: PropTypes.instanceOf(Date),
  slotEnd: PropTypes.number
};

class Popup extends React.Component {
  componentDidMount() {
    let { popupOffset = 5 } = this.props,
      { top, left, width, height } = getOffset(this.refs.root),
      viewBottom = window.innerHeight + getScrollTop(window),
      viewRight = window.innerWidth + getScrollLeft(window),
      bottom = top + height,
      right = left + width;

    if (bottom > viewBottom || right > viewRight) {
      let topOffset, leftOffset;

      if (bottom > viewBottom)
        topOffset = bottom - viewBottom + (popupOffset.y || +popupOffset || 0);
      if (right > viewRight) leftOffset = right - viewRight + (popupOffset.x || +popupOffset || 0);

      this.setState({ topOffset, leftOffset }); //eslint-disable-line
    }
  }

  render() {
    let {
      events,
      selected,
      getters,
      accessors,
      components,
      onSelect,
      onDoubleClick,
      slotStart,
      slotEnd,
      localizer
    } = this.props;

    let { left, width, top } = this.props.position,
      topOffset = (this.state || {}).topOffset || 0,
      leftOffset = (this.state || {}).leftOffset || 0;

    let style = {
      top: Math.max(0, top - topOffset),
      left: left - leftOffset,
      width: '200px',
      borderRadius: ' 2px',
      boxShadow: ' 0 0 20px 0 rgba(0, 0, 0, 0.2)',
      backgroundColor: '#ffffff'
    };

    return (
      <div ref="root" style={style} className="rbc-overlay">
        <div className="rbc-overlay-header">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontWeight: 600, fontSize: '24px', color: '#7d7d7d' }}>
              {localizer.format(slotStart, 'dateFormat')}{' '}
            </span>
            &nbsp;
            <span
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.3px',
                color: '#888888',
                display: ' inline-block',
                marginTop: '1.1px'
              }}
            >
              {localizer.format(slotStart, 'ddd')}{' '}
            </span>
          </div>
          <div>
            <Icons.Close size={10} onClick={this.props.hide} color="#7d7d7d" />
          </div>
        </div>
        {events.map((event, idx) => (
          <EventCell
            key={idx}
            type="popup"
            event={event}
            getters={getters}
            onSelect={onSelect}
            accessors={accessors}
            components={components}
            onDoubleClick={onDoubleClick}
            continuesPrior={dates.lt(accessors.end(event), slotStart, 'day')}
            continuesAfter={dates.gte(accessors.start(event), slotEnd, 'day')}
            selected={isSelected(event, selected)}
          />
        ))}
      </div>
    );
  }
}

Popup.propTypes = propTypes;

export default Popup;
