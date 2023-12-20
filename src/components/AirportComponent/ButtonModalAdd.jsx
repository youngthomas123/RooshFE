import { Autocomplete, Box, Button, Container, Modal, Stack, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SaveIcon from '@mui/icons-material/Save';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import ProvidersApi from '../../APIs/ProvidersApi';
import AirportsApi from '../../APIs/AirportsAPI';
const ButtonModalAdd = () => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [nameinput, setNameinput] = useState('');
    const [countryinput, setCountryinput] = useState('');
    const [codeinput, setCodeinput] = useState('');
    const [addedAirportId, setAddedAirportId] = useState('');

    const textFieldTitles = [
        { key: 'city', label: 'City', type: 'text', value: (e) => setNameinput(e.target.value) },
        { key: 'country', label: 'Country', type: 'text', value: (e) => setCountryinput(e.target.value) },
        { key: 'terminal', label: 'Terminal', type: 'text', value: (e) => setCodeinput(e.target.value) },
    ];

    const handleAddAirport = async () => {
        try {
            const response = await AirportsApi.addAirports({
                name: nameinput,
                city: nameinput,
                country: countryinput,
                terminal: codeinput,
                providerId: selectedProvider.id
            });
            setAddedAirportId(response.data);
            console.log(response.data);
        } catch (err) {
            console.error('Error saving airport:', err);
        }
        setOpen(false);
    };
    const [selectedProvider, setSelectedProvider] = useState(null);
    //getting all providers
    const [providers, setProviders] = useState([]);
    const getAllProviders = () => {
        ProvidersApi.getAll()
            .then(response => {
                setProviders(response.data);
            })
            .catch(err => console.error('Error fetching genres:', err));
    }

    useEffect(() => {
        getAllProviders();
    }, []);

    const handleProviderChange = (event, newValue) => {
        setSelectedProvider(newValue);
        console.log(newValue);
        console.log(selectedProvider.id);
      };
    return (
        <>
            <Button variant="contained" size='large' onClick={handleOpen} sx={{ textTransform: 'none', py: 1.3 }}>Add Airport</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" sx={{ mb: 2 }}>
                        Add New Airports
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        size="small"
                        options={providers}
                        getOptionLabel={(option) => option.name}
                        sx={{ width: 285, height: 40, backgroundColor: 'white', ml: 3, mb: 2 }}
                        renderInput={(params) => <TextField {...params} label="Providers" />}
                        value={selectedProvider} // Controlled component to set the selected value
                        onChange={handleProviderChange}
                    />
                    {textFieldTitles.map((title) => (
                        <Container key={title.key} sx={{ mb: 2 }}>
                            <TextField
                                required
                                id="filled-required"
                                label={title.label}
                                variant="filled"
                                sx={{ width: '100%' }}
                                onChange={title.value}
                                defaultValue=''
                            />
                        </Container>
                    ))}

                    <Container>
                        <Button variant="contained" color='success' startIcon={<SaveAltIcon />} sx={{ float: 'right' }} onClick={handleAddAirport}>
                            Save
                        </Button>
                    </Container>
                </Box>
            </Modal>
        </>
    )
}

export default ButtonModalAdd;