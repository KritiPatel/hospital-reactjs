import React from 'react';
import { Button, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

const topRowStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '20px',
  paddingLeft: '16px',
  paddingRight: '16px',
};

const searchBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  background: 'white',
  borderRadius: '20px',
  padding: '4px 8px',
  marginRight: '10px',
  flex: 1,
};

const searchIconStyle = {
  marginRight: '8px',
  color: 'gray',
};

const inputStyle = {
  border: 'none',
  outline: 'none',
  height: '35px',
  width: '100%',
};

const buttonStyle = {
  backgroundColor: '#3700B3',
  paddingLeft: '30px',
  paddingRight: '30px',
  color: 'white',
  borderRadius: '20px',
  height: '45px',
  marginLeft: '8px',
  marginRight: '8px',
  textTransform: 'none',
  cursor: 'not-allowed',
  opacity: 0.5,
};

const TopRowBillingPage = () => {

  return (
    <div style={topRowStyle}>
      <div style={searchBoxStyle}>
        <SearchIcon style={searchIconStyle} />
        <input
          type="text"
          placeholder="Search Patient"
          style={inputStyle}
        />
      </div>
      <Button variant="contained" color="primary" style={buttonStyle as React.CSSProperties} disabled >
        Make an Appointment
      </Button>
      <Button variant="contained" color="primary" style={buttonStyle as React.CSSProperties} disabled>
        Add Patient
      </Button>
      <IconButton
        color="primary"
        style={{ backgroundColor: '#3700B3', marginLeft: '16px', borderRadius: '50%' }}
      >
        <NotificationsIcon />
      </IconButton>
    </div>
  );
};

export default TopRowBillingPage;

