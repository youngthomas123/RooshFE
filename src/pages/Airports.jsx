import { Box, Button, Stack, Typography, TextField, Autocomplete } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TableAirport from '../components/AirportComponent/TableAirport';
import ButtonModalAdd from '../components/AirportComponent/ButtonModalAdd';

const Airports = () => {

    const [iconFlipped, setIconFlipped] = useState(false);
    const [searchAirport, setSearchAirport] = useState({
        city: "",
        country: ""
    });

    const handleFilters = () => {
        setIconFlipped(!iconFlipped);
    };

    return (
        <div>
            <Typography variant="h4">
                Airports View
            </Typography>

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2}
            >
                <Box>
                    <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Overview
                    </Typography>
                </Box>

                {/*Filter Bar*/}
                <Button
                    variant="outlined"
                    startIcon={<FilterListIcon style={{ color: 'orange', transform: iconFlipped ? 'rotate(180deg)' : 'none' }} />}
                    sx={{
                        background: 'white',
                        borderColor: 'lightgrey',
                        color: 'black',
                        borderRadius: 20,
                        fontWeight: 'bold',
                    }}
                    onClick={handleFilters}
                >
                    FILTERS
                </Button>

                {/*Search bar*/}
                <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    onChange={(event) => setSearchAirport({ ...searchAirport, country: event.target.value, city: "" })}
                />

                {/*SortBY*/}
                {/* <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={"Airport"}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Airport" />}
                /> */}

                {/*Add button*/}
                {/* <Button variant="contained" size='large' sx={{ textTransform: 'none', py: 1.3 }}>Add Airport</Button> */}
                <ButtonModalAdd />
            </Stack>

            <TableAirport searchAirport={searchAirport} />
        </div>
    );
}

export default Airports;