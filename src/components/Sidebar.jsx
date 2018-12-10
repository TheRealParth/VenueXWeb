import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import calendarWhiteIcon from '../assets/calendar-white.svg';
import peopleWhiteIcon from '../assets/people-white.svg';
import billingWhiteIcon from '../assets/bill-white.svg';

const Container = styled.div`
  width: 226px;
  height: 100%;
  background-color: #000000;
  color: #fff;
`;

const Item = styled(Link)`
  color: #fff;
  text-decoration: none;
  height: 70px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${props => '#333333'}4D;
  }

  ${props =>
    props.isActive &&
    css`
      background-color: ${props => '#333333'}99;

      &:hover {
        background-color: ${props => '#333333'}99;
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        width: 5px;
        background-color: ${props => '#333333'};
        box-shadow: 3px 0 4px 0 rgba(0, 0, 0, 0.1);
      }
    `}
`;

const ItemIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = withRouter(({ children, match }) => (
  <Layout>
    <Container>
      <Item isActive={match.path.indexOf('/events') !== -1} to="/events">
        <ItemIcon src={calendarWhiteIcon} />
        <div>Events overview</div>
      </Item>
      <Item isActive={match.path.indexOf('/managestaff') !== -1} to="/managestaff">
        <ItemIcon src={peopleWhiteIcon} />
        <div>Manage Staff</div>
      </Item>
      <Item isActive={match.path.indexOf('/billing') !== -1} to="/billing">
        <ItemIcon src={billingWhiteIcon} />
        <div>Billing</div>
      </Item>
    </Container>
    {children}
  </Layout>
));
