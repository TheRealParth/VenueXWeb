import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Events" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Manage Staff" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Billing" />
    </ListItem>
  </div>
);
