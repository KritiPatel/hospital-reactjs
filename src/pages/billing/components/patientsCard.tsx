import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material'
import { getRequest } from '../../../api/https/apiMethods';
import { PATIENTS, PATIENTS_SEARCH } from '../../../api/https/apiConst';
import NoRecordFoundCard from '../../../utils/commonHelper/noRecord';

const buttonStyle = {
  paddingLeft: '30px',
  paddingRight: '30px',
  color: '#6200ea',
  borderRadius: '20px',
  border: '1px solid  #6200ea',
  height: '30px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#6200ea',
  },
};

interface PatientsCardProps {
  handlePatientClick: (patientId: string) => void;
  searchValue: string
}

function PatientsCard({ handlePatientClick, searchValue }: PatientsCardProps): any {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatient();
  }, [searchValue]);

  const fetchPatient = async () => {
    try {
      if (searchValue) {
        // var response = await getRequest(PATIENTS + `/search?name=${searchValue}`);
        var response = await getRequest(PATIENTS_SEARCH + `${searchValue}`);
      } else {
        var response = await getRequest(PATIENTS);
      }
      setPatients(response);
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  return (
    <>
      {patients.length > 0 ? <div>
        {patients.map((data: any, index: any) => (
          <Card key={index} onClick={() => handlePatientClick(data._id)} style={{ marginBottom: '16px', marginTop: '20px', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <CardMedia
                  component="img"
                  alt="Sample Image"
                  height="120"
                  width="100"
                  image={data.image ? data.image : 'https://via.placeholder.com/100'}
                  style={{ borderRadius: '10px', margin: '5px' }}
                />
              </Grid>
              <Grid item xs={9}>
                <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography variant="h6" style={{ marginBottom: '8px' }}>{data.name}</Typography>
                  <Typography variant="body1" style={{ marginBottom: '4px' }}>{`${data.age}, ${data.gender}`}</Typography>
                  <Typography variant="body2"><span style={{ color: '#999' }}>Bill No.</span> {data.billNo}</Typography>
                  {/* <Button variant="outlined" color="primary" style={buttonStyle as React.CSSProperties}>View Prescription</Button> */}
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        ))}
      </div> : <NoRecordFoundCard />
      }
    </>
  )
}

export default PatientsCard