import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const EmptyCard = () => {
  const cardStyle = {
    padding: '16px',
    marginBottom: '24px',
    marginTop: '20px',
    height: '600px',
    backgroundColor: '#eeeeee',
  };

  const textStyles = {
    fontSize: '16px',
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography style={textStyles}>No data available.</Typography>
      </CardContent>
    </Card>
  );
};

export default EmptyCard;
