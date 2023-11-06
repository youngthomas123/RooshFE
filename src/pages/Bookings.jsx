import { Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '@mui/material/ButtonBase';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';

const Bookings = () => {

    return (
        <>
            <Typography variant="h4" >
                Bookings View
            </Typography>

            <Button variant="contained" endIcon={<SendIcon />} sx={{ml:5}}>
                Send
            </Button>
            
        </>
        
        // ADD COMPONENTS HERE

    );
}

export default Bookings;

