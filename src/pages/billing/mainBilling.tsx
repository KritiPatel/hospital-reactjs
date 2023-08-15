import React, { useState, useEffect } from 'react'
import Sidebar from '../layout/sidebar'
import { Container, Card, CardMedia, CardContent, Typography, Grid, Button, IconButton } from '@mui/material';
import PatientsCard from './components/patientsCard';
import BillingCard from './components/billCard';
import TopRowBillingPage from './components/topRowBillingPage';
import EmptyCard from './components/emptyCard';
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

function BillingPage() {
  const [selectedPatientsId, setSelectedPatientId] = useState('');
  const selectedPatientId = localStorage.getItem('selectedPatientId');
  const [reload, setReload] = useState(false);
  const [search, setSearch] = useState('');

  const contentStyle = {
    flex: 1,
    paddingLeft: '20px',
    overflow: 'hidden',
  };
  const containerStyle = (): React.CSSProperties => ({
    // background: '#fafafa',
    background: '#f5f5f5',
    padding: '90px',
    marginLeft: '190px',
    position: 'relative',
    borderRadius: '0 20px 20px 0',
    boxShadow: '4px 0px 8px rgba(0, 0, 0, 0.1)',
  })

  const handlePatientClick = (patientId: any) => {
    localStorage.setItem('selectedPatientId', patientId);
    setSelectedPatientId(patientId);
    setReload(true);
  };

  useEffect(() => {
    console.log(search, 'search');
  }, [search])

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={contentStyle}>
          <div style={containerStyle()}>
            {/* <TopRowBillingPage /> */}
            <div style={topRowStyle}>
              <div style={searchBoxStyle}>
                <SearchIcon style={searchIconStyle} />
                <input
                  type="text"
                  placeholder="Search Patient"
                  style={inputStyle}
                  // onChange={(e: any) => setSearch(e.target.value)}
                  onChange={handleSearch}
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
            <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', marginTop: '20px' }}>
              Billing Overview
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <PatientsCard handlePatientClick={handlePatientClick} searchValue={search} />
              </Grid>
              <Grid item xs={8}>
                {selectedPatientId && <BillingCard selectedId={selectedPatientId} reload={reload} setReload={setReload} />}
                {/* <EmptyCard/> */}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  )
}

export default BillingPage