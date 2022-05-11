import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Machine from '../../assets/images/machine.png';
import WorldMap from '../../assets/images/worldMap.png';
import RightCircle from '../../assets/images/rightCircle.png';
import Rectangle from '../../assets/images/rectangle.png';
import { useSelector, useDispatch } from 'react-redux';

const styles = {
    container: {
        height: '83vh',
    },
    item: {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {
            md: '50%',
        },
    },
    item1: {
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: {
            md: '50%',
        },
    },
    whatWeDo: {
        opacity: '0.06',
        fontFamily: 'Calibre',
        fontSize: '75px',
        fontStyle: 'normal',
        fontWeight: '900',
        lineHeight: '124px',
        letterSpacing: '0em',
        textAlign: 'left',
        textTransform: 'uppercase',
    },
    aboutUs: {
        marginLeft: '175px',
        textTransform: 'capitalize',
        color: 'primary',
        fontFamily: 'Calibre',
        fontWeight: '300',
        fontSize: '18px',
        lineHeight: '26px',
    },
    title: {
        color: 'primary',
    },
    subtitle: {
        color: 'primary',
        opacity: '0.5',
    },
};

export default function Hero() {
    let isDarkMode = useSelector((state) => state.isDarkMode.value);
    return (
        <Grid container justify="space-evenly" sx={styles.container}>
            <Grid item sx={styles.item1} lg={7}>
                <Box
                    sx={{
                        bgcolor: 'background.default',
                        color: 'text.primary',
                    }}
                >
                    <Typography variant="h5" sx={styles.title}>
                        Hi. We're DeFi Yield Protocol
                    </Typography>
                    <Typography variant="subtitle2" sx={styles.subtitle}>
                        We're on a quest to create a unique Decentralized
                        experience
                    </Typography>
                </Box>
                <Typography
                    sx={{
                        ...styles.whatWeDo,
                        color: isDarkMode ? 'custom.pink' : 'primary',
                        opacity: isDarkMode ? '0.08' : '0.06',
                    }}
                >
                    WHAT WE DO
                </Typography>
                <Typography variant="caption" sx={styles.aboutUs}>
                    DeFi Yield protocol (DYP) is changing the way you earn
                    through liquidity on Ethereum smart contract. The argument
                    against DeFi is that whales have the power to control the
                    network. DeFi Yield protocol (DYP) prevents the whale
                    advantage in DeFi.
                </Typography>
            </Grid>
            <Grid item sx={styles.item} lg={5}>
                <img src={WorldMap} alt="map" className="map" />
                <img src={RightCircle} alt="circle" className="circle" />
                <img src={Rectangle} alt="rectangle" className="rectangle" />
                <img src={Machine} alt="asf" className="mainImage" />
            </Grid>
        </Grid>
    );
}
