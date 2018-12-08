import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import AddButton from 'components/AddButton';
import Button from 'components/Button';
import PersonalMenu from 'components/PersonalMenu';
import leftArrowIcon from 'assets/caret-left-custom.svg';
import rightArrowIcon from 'assets/caret-right-custom.svg';
import closeIcon from 'assets/close.svg';
import moment from 'moment';

const Container = styled.div`
  border: solid 1px #ededed;
  padding: 15px;
  padding-bottom: 0px;
`;

const Header = styled.div`
  background-color: #fafafa;
  margin: -15px -15px 0px -15px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const MonthPicker = styled.div`
  display: flex;
  font-size: 20px;
  color: #222222;
  align-items: center;
`;

const ArrowIcon = styled.img`
  height: 17px;
  object-fit: contain;
  margin: 0px 20px;
  cursor: pointer;
`;

const WeekdaysBar = styled.div`
  display: flex;

  div {
    flex: 1;
    padding: 25px 0px;
    text-align: center;
  }
`;

const CalItem = styled.div`
  border: solid 1px #ededed;
  padding: 10px;
  height: 110px;
  flex-basis: 100%;
  position: relative;
  text-align: right;

  small {
    display: inline-flex;
    text-align: right;
    align-items: center;
    justify-content: center;
    margin-top: -5px;
    color: #7d7d7d;
    ${props => props.isPast && css`
      color: #b0b0b0;
    `}
    font-size: 14px;
    height: 22px;

    ${props => props.isToday && css`
      width: 22px;
      background-color: #000;
      border-radius: 50%;
      color: #FFF;
    `}
  }

  &:first-child {
    border-left: none;
  }

  &:last-child {
    border-right 0px;
  }
`;

const CalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px -15px;
`;

const CalEvent = styled.div`
  background-color: ${props => `${props.theme.colors.primary}${props.opacity}`};
  margin: 2px 0px;
  white-space: nowrap;
  color: #FFF;
  border-radius: 2px;
  padding: 7px 3px;
  text-overflow: ellipsis;
  font-size: 12px;
  text-align: center;
  max-width: 100%;
`;

const EventsContainer = styled.div`
  position: absolute;
  left: 2px;
  right: 2px;
  top: 35px;
  bottom: 10px;
`;

const MoreButton = styled.div`
  text-align: left;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-size: 12px;
  padding: 5px 2px;
  cursor: pointer;
`;

const ExpandedItem = styled.div`
  position: absolute;
  padding: 10px;
  left: -16px;
  right: -16px;
  top: -50px;
  bottom: -30px;
  background-color: #FFF;
  z-index: 10;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 2px;

  .item {
    display: flex;
    align-items: center;
  }

  span {
    font-size: 24px;
    font-weight: 500;
    color: #7d7d7d;
  }


`;

const ExpandedHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;

  img {
    width: 13px;
    cursor: pointer;
  }

  div {
    font-size: 12px;
    color: #888888;
    text-transform: uppercase;
    margin-left: 5px;
  }
`;

const CalTitle = styled.div`
  font-family: Lora;
  font-size: 20px;
`;

export default class Calendar extends PureComponent {

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
      events,
      date,
      onNextMonth,
      onPreviousMonth,
      onAdd,
      onEventClicked,
      onToday,
    } = this.props;
    const weekdays = [1, 2, 3, 4, 5, 6, 7].map(dateNumber => (
      moment(date).set('date', dateNumber).format('ddd')
    ));
    let displayingDate = 1;
    return (
      <Container>
        <Header>
          <div>
            <Button
              label="Today"
              onClick={onToday}
            />
          </div>
          <MonthPicker>
            <ArrowIcon src={leftArrowIcon} onClick={onPreviousMonth} />
            <CalTitle>{date.format('MMMM YYYY')}</CalTitle>
            <ArrowIcon src={rightArrowIcon} onClick={onNextMonth} />
          </MonthPicker>
          <div style={{ display: 'flex' }}>
            <PersonalMenu />
            <AddButton onClick={onAdd} />
          </div>
        </Header>
        <WeekdaysBar>
          {weekdays.map(day => (
            <div key={day}>
              {day}
            </div>
          ))}
        </WeekdaysBar>
        {[1, 2, 3, 4, 5].map(() => (
          <CalRow>
            {[1, 2, 3, 4, 5, 6, 7].map(() => {
              const currentDate = displayingDate++;
              const actualDate = moment(date).set('hour', 0).set('date', currentDate);

              let label = actualDate.format('DD');

              if (actualDate.date() === 1 && currentDate !== 1) {
                label = actualDate.format('MMM DD');
              }

              const eventsThisDate = events[actualDate.format('YYYY-MM-DD')] || [];

              return (
                <CalItem isToday={moment().isSame(actualDate, 'day')} isPast={moment().isAfter(actualDate)}>
                  <small>{label}</small>
                  {eventsThisDate.length > 0 &&
                    <EventsContainer>
                      {eventsThisDate.length > 3 ?
                        this.state.expandedDate === actualDate.format('YYYY-MM-DD') ?
                          <ExpandedItem>
                            <ExpandedHeader>
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
                            </ExpandedHeader>
                            {eventsThisDate.map(event => (
                              <CalEvent
                                opacity={event.opacity}
                                onClick={() => onEventClicked(event)}
                              >
                                {event.label}
                              </CalEvent>
                            ))}
                          </ExpandedItem> :
                          (
                            <React.Fragment>
                              {eventsThisDate.slice(0, 2).map(event => (
                                <CalEvent
                                  opacity={event.opacity}
                                  onClick={() => onEventClicked(event)}
                                >
                                  {event.label}
                                </CalEvent>
                              ))}
                              <MoreButton onClick={() => this.handleMoreClicked(actualDate)}>
                                + {eventsThisDate.slice(2).length} more
                            </MoreButton>
                            </React.Fragment>
                          ) :
                        eventsThisDate.map(event => (
                          <CalEvent
                            opacity={event.opacity}
                            onClick={() => onEventClicked(event)}
                          >
                            {event.label}
                          </CalEvent>
                        ))}
                    </EventsContainer>}
                </CalItem>
              );
            })}
          </CalRow>
        ))}
      </Container>
    );
  }
}
