import React from 'react';
import { Button, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

export default function CommonButton({ text, onClickHandler }) {
    const isDarkMode = useSelector((state) => state.isDarkMode.value);
    return (
        <Button
            sx={{
                backgroundColor: isDarkMode ? '#FF656E' : '#E30613',
                color: '#FFFFFF',
                borderRadius: '15px',
                textTransform: 'Capitalize',
            }}
            onClick={onClickHandler}
        >
            {text}
        </Button>
    );
}
