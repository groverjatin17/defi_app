/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Moon from '../../assets/svg/moon.svg';
import Sun from '../../assets/svg/sun.svg';
import { setDarkMode } from '../../features/commonReducers';

export default styled((props) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.isDarkMode.value);
  return (
    <Switch
      checked={isDarkMode}
      onChange={() => dispatch(setDarkMode())}
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  );
})(({ theme }) => ({
  width: 52,
  height: 26,
  padding: 0,
  margin: theme.spacing(1),
  '& .MuiSwitch-switchBase': {
    padding: 1,
    '&.Mui-checked': {
      transform: 'translateX(25px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#161218' : '#ffffff',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#161218',
      border: '6px solid #fff',
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#161218' : '#ffffff',
    width: 24,
    height: 24,
    backgroundImage:
      theme.palette.mode === 'dark' ? `url(${Sun})` : `url(${Moon})`,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#f4d2d4' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
