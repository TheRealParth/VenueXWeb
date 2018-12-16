import React from 'react';
import styled, { css } from 'styled-components';
import filterIcon from '../../assets/filter.svg';
import Icons from '../../assets/icons';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FilterIcon from '@material-ui/icons/Filter';
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
    margin: theme.spacing.unit
  },
  extendedIcon: theme.spacing.unit
});

const ManageStaffHeader = ({ label, classes, ...rest }) => {
  console.log(classes);
  return (
    <>
      <Button
        label={
          <FilterLabel>
            <FilterIcon />
            Filter
          </FilterLabel>
        }
        kind="white"
      />

      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>

      <Avatar>
        <PersonIcon />
      </Avatar>
    </>
  );
};

ManageStaffHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ManageStaffHeader);
