import React from 'react';
import styled, { css } from 'styled-components';
import filterIcon from '../../assets/filter.svg';
import Icons from '../../assets/icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Button from '../Button';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

const FilterLabel = styled.div` 
font-family: Montserrat;
font-size: 12px;
font-weight: bold;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
text-align: center;
color: #7d7d7d;
display: flex;
align-items: center;
justify-content: space-around
}`;
const styles = theme => ({
  fab: {
    size: 25,
    backgroundColor: '#c0b69b',
    margin: theme.spacing.unit
  },
  extendedIcon: theme.spacing.unit
});

const ManageStaffHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
`;
export default ({ label, classes, ...rest }) => (
  <>
    <Button
      {...rest}
      label={
        <FilterLabel {...rest}>
          <FilterListIcon />
          Filter
        </FilterLabel>
      }
      kind="white"
    />
    <Avatar className={classes.avatar}>
      <PersonIcon />
    </Avatar>
    <Link to="/manageStaff/add">
      <Fab backgroundColor="#c0b69b" {...rest} aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Link>
  </>
);

ManageStaffHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
