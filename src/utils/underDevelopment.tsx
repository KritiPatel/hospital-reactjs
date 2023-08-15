import React from 'react';
import { Box, Typography, Backdrop, CircularProgress } from '@mui/material';
import Sidebar from '../pages/layout/sidebar';

const UnderDevelopment = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <Backdrop open={true} style={{ zIndex: 1, color: '#fff' }}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Typography variant="h5" gutterBottom>
                            Under Development
                        </Typography>
                        <CircularProgress color="inherit" />
                    </Box>
                </Backdrop>
            </div>
        </>
    );
};

export default UnderDevelopment;
