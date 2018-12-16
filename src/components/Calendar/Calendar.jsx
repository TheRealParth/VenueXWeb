import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import AddButton from '../AddButton';
import Button from '../Button';
import PersonalMenu from '../PersonalMenu';
import leftArrowIcon from '../../assets/caret-left-custom.svg';
import rightArrowIcon from '../../assets/caret-right-custom.svg';
import closeIcon from '../../assets/close.svg';
import moment from 'moment';
import styles from './index.module.scss';
const weekDayNums = [1, 2, 3, 4, 5, 6, 7];
class Calendar extends PureComponent {
  state = {
    expandedDate: null,
  };
  handleMoreClicked = (actualDate) => {
    this.setState({
      expandedDate: actualDate.format('YYYY-MM-DD'),
    });
  }
  render() {
    const {
      events = [],
      date = moment(),
      onNextMonth,
      onPreviousMonth,
      onAdd,
      onEventClicked,
      onToday,
    } = this.props;
    const weekdays = weekDayNums.map(dateNumber => (
      moment(date).set('date', dateNumber).format('ddd')
    ));
    let displayingDate = 1;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <Button
              label="Today"
              onClick={onToday}
            />
          </div>
          <div className={styles.monthPicker}>
            <img className={styles.arrowIcon} src={leftArrowIcon} onClick={onPreviousMonth} />
            <div className={styles.calTitle}>{date.format('MMMM YYYY')}</div>
            <img className={styles.arrowIcon} src={rightArrowIcon} onClick={onNextMonth} />
          </div>
          <div style={{ display: 'flex' }}>
            <PersonalMenu />
            <AddButton onClick={onAdd} />
          </div>
        </div>
        <div className={styles.weekdaysBar}>
          {weekdays.map(day => (
            <div key={day}>
              {day}
            </div>
          ))}
        </div>
        {[1, 2, 3, 4, 5].map(() => (
          <div className={styles.calRow}>
            {weekDayNums.map(() => {
              const currentDate = displayingDate++;
              const actualDate = moment(date).set('hour', 0).set('date', currentDate);

              let label = actualDate.format('DD');

              if (actualDate.date() === 1 && currentDate !== 1) {
                label = actualDate.format('MMM DD');
              }

              const eventsThisDate = events[actualDate.format('YYYY-MM-DD')] || [];

              return (
                <div className={styles.calItem} isToday={moment().isSame(actualDate, 'day')} isPast={moment().isAfter(actualDate)}>
                  <small>{label}</small>
                  {eventsThisDate.length > 0 &&
                    <div className={styles.eventsContainer}>
                      {eventsThisDate.length > 3 ?
                        this.state.expandedDate === actualDate.format('YYYY-MM-DD') ?
                          <div className={styles.expandedItem}>
                            <div className={styles.expandedHeader}>
                              <div className="item">
                                <span>{label}</span>
                                <div>{actualDate.format('ddd')}</div>
                              </div>
                              <div
                                className="item"
                                onClick={() => this.setState({ expandedDate: null })}
                              >
                                <img
                                  alt=""
                                  src={closeIcon}
                                />
                              </div>
                            </div>
                            {eventsThisDate.map(event => (
                              <div
                                className={styles.calEvent}
                                opacity={event.opacity}
                                onClick={() => onEventClicked(event)}
                              >
                                {event.label}
                              </div>
                            ))}
                          </div> :
                          (
                            <React.Fragment>
                              {eventsThisDate.slice(0, 2).map(event => (
                                <div
                                  className={styles.calEvent}
                                  opacity={event.opacity}
                                  onClick={() => onEventClicked(event)}
                                >
                                  {event.label}
                                </div>
                              ))}
                              <div className={styles.moreButton} onClick={() => this.handleMoreClicked(actualDate)}>
                                + {eventsThisDate.slice(2).length} more
                            </div>
                            </React.Fragment>
                          ) :
                        eventsThisDate.map(event => (
                          <div
                            className={styles.calEvent}
                            opacity={event.opacity}
                            onClick={() => onEventClicked(event)}
                          >
                            {event.label}
                          </div>
                        ))}
                    </div>}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
}
export { Calendar };