import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailGeneral = () => {
    const { rowData } = useParams();
    const decodedData = JSON.parse(decodeURIComponent(rowData));
    const [value, setValue] = React.useState(0);


    return (
        <Box>
            <Typography variant="h5" gutterBottom sx={{ color: 'grey' }}>General</Typography>
        </Box>
    );
}

export default DetailGeneral;