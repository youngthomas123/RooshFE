import { Autocomplete, Box, Button, Container, Modal, Stack, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SaveIcon from '@mui/icons-material/Save';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import ProvidersApi from '../../APIs/ProvidersApi';
import AirportsApi from '../../APIs/AirportsAPI';
import { ProvidersApifetch } from '../../APIs/ProvidersApi';
const ButtonModalAdd = () => 
{
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
    const [terminalinput, setTerminalinput] = useState('');
    const [addedAirportId, setAddedAirportId] = useState('');

    const textFieldTitles = [
        { key: 'city', label: 'City', type: 'text', value: (e) => setNameinput(e.target.value) },
        { key: 'country', label: 'Country', type: 'text', value: (e) => setCountryinput(e.target.value) },
        { key: 'terminal', label: 'Terminal', type: 'text', value: (e) => setTerminalinput(e.target.value) },
    ];

    const handleAddAirport = async () => {
       
        if(selectedProvider!=null)
        {
            console.log("name " +nameinput)
            console.log("country "+ countryinput)
            console.log("terminal "+ terminalinput)
            console.log("AirportId "+ addedAirportId)

            const airport = {
                name: "placeholderName",
                code : "palceHolderCode",
                streetname : "placeHolderStreetName",
                streetnumber: 0,
                zipCode : "placeHolderZipCode",
                city : nameinput,
                country : countryinput,
                longtitude : 0,
                latitude : 0,
                terminal : parseInt(terminalinput)
            }





            AirportsApi.AddAirport(selectedProvider.id, airport)
            .then((response)=>{
                if(response.ok)
                {
                    console.log("added airport with provider " + selectedProvider);
                }
                else
                {
                    console.log("failed to add airport with provider " +selectedProvider )
                }
            })
            .catch((error)=>{
                console.log(error);
            })

        }
        else
        {
            console.log("No provider selected");
        }

        setOpen(false);
    };


    const [selectedProvider, setSelectedProvider] = useState(null);
    //getting all providers
    const [providers, setProviders] = useState([]);
    

    useEffect(() => {
        ProvidersApifetch.getAllProviders()
        .then((response)=>{
            if(response.ok)
            {
                response.json()
                .then((data)=>{
                    console.log(data);
                    setProviders(data);
                })
            }
        })
    }, []);

    const handleProviderChange = (event, newValue) => {
        setSelectedProvider(newValue);
        console.log(newValue);
        
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
                     getOptionLabel={(option) => option.name || 'Unknown Name'} // Use a fallback value
                     sx={{ width: 285, height: 40, backgroundColor: 'white', ml: 3, mb: 2 }}
                     renderInput={(params) => <TextField {...params} label="Providers" />}
                    //  value={selectedProvider}
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