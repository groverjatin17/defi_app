import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, SwipeableDrawer, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './index';
import Logo from '../../assets/images/logo.png';
import MenuIcon from '../../assets/svg/menuIcon.svg';
import SideDrawer from './SideDrawer';
import { navBarItems } from '../global-constants';
import { toggleDrawer } from '../../features/commonReducers';
import Switch from './Switch2';

const styles = {
    mobileNavbar: {
        display: { md: 'none' },
        padding: '15px',
    },
    container: {
        padding: '0px 20px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        boxShadow: '3px 5px 9px -5px rgba(0,0,0,0.35)',
        height: {
            lg: '100px',
        },
        display: { xs: 'none', lg: 'flex' },
    },
    navBar: {
        display: 'flex',
        height: '55px',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '50px',
        display: { sm: 'none' },
    },
    ul: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        listStyleType: 'none',
    },
    li: {
        padding: '0px 10px',
    },
    navLink: {
        color: 'rgba(0, 0, 0, 0.4)',
        textDecoration: 'none',
        fontWeight: '500',
        lineHeight: '26px',
    },
};

export default function NavigationBar() {
    const dispatch = useDispatch();
    const theme = useTheme();
    const isDrawerOpen = useSelector((state) => state.isDrawerOpen.value);
    const isDarkMode = useSelector((state) => state.isDarkMode.value);

    const activeLink = isDarkMode ? { color: 'white' } : { color: 'black' };
    const renderDesktopNavBar = (
        <Box
            sx={{
                ...styles.container,
                backgroundColor: isDarkMode ? '#27222B' : '#ffffff',
            }}
        >
            <span>
                <img src={Logo} alt="logo" />
            </span>
            <nav style={styles.navBar}>
                <ul style={styles.ul}>
                    {navBarItems.map((item) => (
                        <li style={styles.li} key={item.title}>
                            <NavLink
                                to={item.link}
                                style={({ isActive }) => ({
                                    ...styles.navLink,
                                    color: isDarkMode
                                        ? 'rgba(255, 255, 255, 0.4)'
                                        : 'rgba(0, 0, 0, 0.4)',

                                    ...(isActive ? activeLink : undefined),
                                })}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Button text="Connect Wallet" onClickHandler={() => {}} />
            <Switch />
        </Box>
    );

    const renderMobileNavBar = (
        <Grid
            container
            sx={styles.mobileNavbar}
            justifyContent="space-between"
            alignItems="center"
        >
            <Grid item>
                <Box component="span">
                    <img src={Logo} alt="logo" sx="logo" />
                </Box>
            </Grid>
            <Grid item>
                <Box component="span" onClick={() => dispatch(toggleDrawer())}>
                    <img src={MenuIcon} alt="icon" />
                </Box>
            </Grid>
            <SwipeableDrawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => dispatch(toggleDrawer())}
                onOpen={() => dispatch(toggleDrawer())}
            >
                <SideDrawer />
            </SwipeableDrawer>
        </Grid>
    );
    return (
        <>
            {renderDesktopNavBar}
            {renderMobileNavBar}
        </>
    );
}
