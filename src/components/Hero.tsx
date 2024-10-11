import { Box, Typography } from '@mui/material';

import Button from './Button';

const Hero = () =>
{
    return (
        <Box
            sx={
            {
                display: 'flex',
                flexDirection: 'column',
                height: '75vh',
                width: '25vw',
                justifyContent: 'center'
            }}
        >
            <Typography
                variant="h3"
                sx={
                {
                    textTransform: 'uppercase',
                    fontSize: '1.5rem',
                    letterSpacing: '0.5rem',
                    color: '#4F4F4F',
                    marginBottom: '1rem'
                }}
            >
                New Product
            </Typography>
            <Typography
                variant="h1"
                sx={
                {
                    fontWeight: 600,
                    marginBottom: '2rem',
                    textTransform: 'uppercase',
                    fontSize: '4.5rem'
                }}
            >
                XX99 Mark II Headphones
            </Typography>
            <Typography
                variant="body1"
                sx={
                {
                    color: '#727272',
                    fontSize: '1.25rem',
                    marginBottom: '3rem'
                }}
            >
                Experience natural, lifelike audio and exceptional build quality made
                for the passionate music enthusiast.
            </Typography>
            <Button variant="contained" color="#D97D45" />
        </Box>
    );
}

export default Hero;
