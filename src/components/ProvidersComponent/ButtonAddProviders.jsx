import { Box, Button, Container, Modal, Stack, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SaveIcon from '@mui/icons-material/Save';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import ProvidersApi from '../../APIs/ProvidersApi';
const ButtonAddProvider = () => {
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

    const[titleInput, setTitleInput] = useState('');
    const[logoInput, setLogoInput] = useState('');

    const textFieldTitles = [
        { key: 'name', label: 'Name', type: 'text', value : (e) => setTitleInput(e.target.value) },
        { key: 'image', label: 'Image', type: 'image'},
    ];

    const[filename, setFilename] = useState('');
    const handleFileUpload =  (event) => {
        const file = event.target.files[0];

        setFilename(file.name);

        // console.log(file);
        // setFilename(file.name);
        // setLogoInput(file);
        // FormData.append("file", file);

        
        // for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1]);
        // }
        // make a POST request to the File Upload API with the FormData object and Rapid API headers
    };

    const handleAddProvider = async () => {
        try {
            await ProvidersApi.addProvider({
                name: titleInput,
                logo: filename,
            });
        } catch (err) {
            console.error('Error saving genre:', err);
        }
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" size='large'  onClick={handleOpen} sx={{ textTransform: 'none', py: 1.3 }}>Add Provider</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h4" sx={{ mb: 2 }}>
                        Add New Providers
                    </Typography>
                        {textFieldTitles.map((title) => (
                            <Container key={title.key} sx={{mb: 2}}>
                                {title.type == 'text' ? (
                                    <TextField
                                    required
                                    id="filled-required"
                                    label={title.label}
                                    variant="filled"
                                    sx={{ width: '100%' }}
                                    onChange= {title.value}
                                    defaultValue=''
                                    />
                                ) : (
                                    <Stack
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="center"
                                        spacing={0.5}
                                    >
                                        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />} sx={{ height: 40 , paddingX: 3}} >
                                            File
                                            <VisuallyHiddenInput type="file" onChange={handleFileUpload} />
                                        </Button>
                                            <Typography variant="body2" sx={{ mt: 1 }}><b>{filename}</b></Typography>
                                    </Stack>
                                )}
                            </Container>
                        ))}
                    
                    <Container>
                        <Button variant="contained" color='success' startIcon={<SaveAltIcon />} sx={{ float: 'right' }} onClick={handleAddProvider}>
                            Save
                        </Button>
                    </Container>
                </Box>
            </Modal>
        </>
    )
}

export default ButtonAddProvider;