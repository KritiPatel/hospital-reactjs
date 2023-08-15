import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Box, Typography, Button, TableHead, TableContainer, Table, TableBody, TableRow, TableCell, Paper, Container } from '@mui/material';
import { getRequest } from '../../../api/https/apiMethods';
import { PATIENTS_DETAILS } from '../../../api/https/apiConst';
import EmptyCard from './emptyCard';
const gridItemStyle = {
  flex: '1',
  maxWidth: '150px',
};

const greyBackgroundStyle = {
  backgroundColor: '#f4f4f4',
};

const lineStyle = {
  borderBottom: '1px solid #ccc',
};


const borderStyle = {
  border: '1px solid #3700B3',
  borderRadius: '10px',

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
  textTransform: 'none'
};

interface BillingCardProps {
  selectedId: string;
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

function BillingCard({ selectedId, reload, setReload }: BillingCardProps) {

  const [patients, setPatients] = useState<any>([]);
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(
    localStorage.getItem('selectedPatientId')
  );

  useEffect(() => {
    if (reload && selectedId) {
      fetchPatient();
      setReload(false);
    }
  }, [reload, selectedId]);

  const fetchPatient = async () => {
    try {
      let response = await getRequest(PATIENTS_DETAILS + `/${selectedId}`);
      setPatients(response);
      console.log(response);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  const formatDate = (date: any) => {
    const options: any = {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };

    const formattedDateTime = new Date(date).toLocaleString('en-IN', options);
    return formattedDateTime;
  };


  return (
    <>
      {patients.name ?
        <Card style={{ marginBottom: '16px', marginTop: '20px', borderRadius: '10px' }}>
          <CardContent style={borderStyle}>
            <Grid container justifyContent="space-between" style={{ marginBottom: '20px' }}>
              <Grid item><Typography variant="h6" style={{ fontWeight: 'bold' }} gutterBottom>Billing Details of {patients.name}</Typography></Grid>
              <Grid item> <Button variant="contained" color="primary" style={buttonStyle as React.CSSProperties} >Print Bill</Button></Grid>
            </Grid>
            <Container>
              <Grid container justifyContent="space-between" style={{ paddingTop: '10px', paddingLeft: '10px', ...greyBackgroundStyle }}>
                <Grid item style={gridItemStyle}><Typography style={{ color: '#999' }}>Patients Name</Typography></Grid>
                <Grid item style={gridItemStyle}><Typography style={{ color: '#999' }}>Age/Gender</Typography></Grid>
                <Grid item style={gridItemStyle}><Typography style={{ color: '#999' }}>Bill No.</Typography></Grid>
                <Grid item style={gridItemStyle}><Typography style={{ color: '#999' }}>Date/Time</Typography></Grid>
                <Grid item style={gridItemStyle}><Typography style={{ color: '#999' }}>Reciept No.</Typography></Grid>
              </Grid>
              <Grid container justifyContent="space-between" style={{ paddingBottom: '10px', paddingLeft: '10px', ...greyBackgroundStyle }}>
                <Grid item style={gridItemStyle}><Typography>{patients.name ? patients.name : '-'}</Typography></Grid>
                <Grid item style={gridItemStyle}><Typography>{patients.age ? patients.age : '-'}/{patients.gender ? patients.gender : '-'}</Typography></Grid>
                <Grid item style={gridItemStyle}><Typography>{patients.billNo ? patients.billNo : '-'}</Typography></Grid>
                <Grid item style={gridItemStyle}><Typography>{patients.dateTime ? formatDate(patients.dateTime) : '-'}</Typography></Grid>
                <Grid item style={gridItemStyle}><Typography>{patients.receiptNo ? patients.receiptNo : '-'}</Typography></Grid>
              </Grid>
              <TableContainer component={Paper}>
                <Table style={{ marginTop: '20px' }}>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontWeight: 'bold' }}>Sr No.</TableCell>
                      <TableCell style={{ fontWeight: 'bold', width: '40%' }}>Service Name</TableCell>
                      <TableCell style={{ fontWeight: 'bold', width: '10%' }}>Price</TableCell>
                      <TableCell style={{ fontWeight: 'bold', width: '10%' }}>Quantity</TableCell>
                      <TableCell style={{ fontWeight: 'bold', width: '10%' }}>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {patients.services && patients.services.length > 0 ? (
                      patients.services.map((service: any, index: number) => (
                        <TableRow key={index}>
                          <TableCell style={{ borderBottom: 'none' }}>{index + 1}</TableCell>
                          <TableCell style={{ borderBottom: 'none' }}>{service.serviceName}</TableCell>
                          <TableCell style={{ borderBottom: 'none', width: '10%' }}>{service.price}</TableCell>
                          <TableCell style={{ borderBottom: 'none', width: '10%' }}>{service.quantity}</TableCell>
                          <TableCell style={{ borderBottom: 'none', width: '10%' }}>{service.amount}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={5} style={{ borderBottom: 'none' }}>No services available</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid container justifyContent="space-between" style={{ paddingBottom: '10px', paddingLeft: '10px', ...greyBackgroundStyle }}>
                <Grid item style={{ marginTop: '20px', ...gridItemStyle }}>
                  <Typography>Mobile Number</Typography>
                </Grid>
                <Grid item style={{ marginTop: '20px', ...gridItemStyle }}>
                  <Typography>{patients.mobileNumber ? patients.mobileNumber : '-'}</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-between" style={{ paddingBottom: '10px', paddingLeft: '10px', ...greyBackgroundStyle }}>
                <Grid item style={gridItemStyle}>
                  <Typography>Tax</Typography>
                </Grid>
                <Grid item style={gridItemStyle}>
                  <Typography>{patients.tax ? patients.tax : '-'}</Typography>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-between" style={{ paddingBottom: '10px', paddingLeft: '10px', ...greyBackgroundStyle }}>
                <Grid item style={gridItemStyle}>
                  <Typography>Discount</Typography>
                </Grid>
                <Grid item style={gridItemStyle}>
                  <Typography>{patients.discount ? patients.discount : '-'}</Typography>
                </Grid>
              </Grid>
              <Box style={lineStyle} />
              <Grid container justifyContent="space-between" style={{ padding: '10px', paddingLeft: '10px', ...greyBackgroundStyle }}>
                <Grid item style={{ fontWeight: 'bold', ...gridItemStyle }}>
                  <Typography style={{ fontWeight: 'bold' }}>Total</Typography>
                </Grid>
                <Grid item style={gridItemStyle}>
                  <Typography>{patients.total ? patients.total : '-'}</Typography>
                </Grid>
              </Grid>
            </Container>
          </CardContent>
        </Card> : <EmptyCard />}

    </>
  )
}

export default BillingCard