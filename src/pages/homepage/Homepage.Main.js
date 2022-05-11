import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';

export default function Home() {
    console.log('rendering home');
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
            }}
        >
            {<Hero />}
        </Box>
    );
}
