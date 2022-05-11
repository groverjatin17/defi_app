import React from 'react';
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Switch from './Switch2';
import CloseIconWhite from '../../assets/svg/closeIconWhite.svg';
import CloseIconBlack from '../../assets/svg/closeIconBlack.svg';
import { navBarItems } from '../global-constants';
import Button from './Button';
import { toggleDrawer } from '../../features/commonReducers';

const styles = {
    sideDrawer: {
        width: '300px',
    },
    toggleSection: {
        marginBottom: '15px',
    },
}

export default function SideDrawer() {
    // const classes = useStyles();
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.isDarkMode.value);
    return (
        <Box p={4} sx={styles.sideDrawer}>
            <Grid
                container
                justify="space-between"
                alignItems="center"
                sx={styles.toggleSection}
            >
                <Grid item>
                    <Switch />
                </Grid>
                <Grid item>
                    <Box
                        component="span"
                        onClick={() => dispatch(toggleDrawer())}
                    >
                        {isDarkMode ? (
                            <img src={CloseIconWhite} alt="icon" />
                        ) : (
                            <img src={CloseIconBlack} alt="icon" />
                        )}
                    </Box>
                </Grid>
            </Grid>
            <List component="nav">
                {navBarItems.map((item) => (
                    <Link
                        to={item.link}
                        onClick={() => dispatch(toggleDrawer())}
                        className="link"
                    >
                        <ListItem button key={item.title}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                        {item.title !== 'About' && <Divider />}
                    </Link>
                ))}
            </List>
            <Box display="flex" justifyContent="center" pt={4}>
                <Button text="Connect Wallet" onClickHandler={() => {}} />
            </Box>
        </Box>
    );
}
