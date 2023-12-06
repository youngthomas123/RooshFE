import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountrySelect() {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 200 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        alt=""
                    />
                    {option.label} 
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Region"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
    {
        code: 'DE',
        label: 'Germany',
        phone: '49',
        suggested: true,
    },

    { code: 'CH', label: 'Switzerland', phone: '41' },
    { code: 'IT', label: 'Italy', phone: '39' },
    {
        code: 'US',
        label: 'United States',
        phone: '1',
        suggested: true,
    },
    {
        code: 'AU',
        label: 'Australia',
        phone: '61',
        suggested: true,
    },
    {
        code: 'FR',
        label: 'France',
        phone: '33',
        suggested: true,
    },
    { code: 'AT', label: 'Austria', phone: '43' },
    { code: 'ES', label: 'Spain', phone: '34' },
    { code: 'GB', label: 'United Kingdom', phone: '44' },
    { code: 'PT', label: 'Portugal', phone: '351' },

];
