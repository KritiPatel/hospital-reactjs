import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const NoRecordFoundCard = () => {
    return (
        <Card style={{ marginBottom: '16px', marginTop: '20px', padding: '10px', borderRadius: '10px' }}>
            <CardContent>
                <Typography variant="body1">No records found.</Typography>
            </CardContent>
        </Card>
    );
};

export default NoRecordFoundCard;