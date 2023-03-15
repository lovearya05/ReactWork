import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import AdjustIcon from '@mui/icons-material/Adjust';

import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';


function Material() {
    return (
        <div>

            <AdjustIcon/>

            <Rating name="size-medium" defaultValue={4} />

            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>

        </div>
    )
}

export default Material
