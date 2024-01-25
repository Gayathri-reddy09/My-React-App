import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ContactsIcon from '@mui/icons-material/Contacts';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Logo from '../image/Logo.png'; 
const Sidebar = () => {
  return (
    <Drawer variant="permanent">
       <img
        src={Logo}
        height="70"
        width="140"
        alt="Logo"
        style={{ margin: '10px'}} />
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <AccountBalanceIcon />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItem>

        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItem>

        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>

        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Advisor" />
        </ListItem>

        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary="Contacts" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
