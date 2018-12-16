import React from 'react';
import styled, { css } from 'styled-components';
import plusIcon from '../assets/plus.svg';
import filterIcon from '../assets/filter.svg';
import Icons from '../../assets/icons';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import Button from '../Button';

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

const styles = {
  container: {
    height: 30 /* not sure what to set this as */,
    backgroundColor: '#fcfbfc',
    paddingLeft: 20,
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  fab: {
    margin: 2
  },
  extendedIcon: 2
};
const ManageStaffHeader = ({ label, classes, ...rest }) => {
  console.log(classes);
  return (
    <ManageStaffHeader className={classes.table} {...rest}>
      <Button
        label={
          <FilterLabel>
            <AddIcon src={filterIcon} />
            Filter
          </FilterLabel>
        }
        kind="white"
      />

      <Fab color="primary" aria-label="Add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </ManageStaffHeader>
  );
};

ManageStaffHeader.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ManageStaffHeader);
