import { Box, Divider, Typography, Grid } from '@mui/material';
import React from 'react';
import ColorOption from './colorOption';

import './option.css';
import SizeOption from './sizeOption';

const Options = ({ name = '', values = [], value = 0, onSelect }) => {
    
    const OptionElements = () => {
        switch (name) {
            case 'Color':
                return (
                    <>
                        {values.map((color, i) => (
                            <Grid item>
                                <ColorOption key={`${color}-${i}`} color={color} selected={value === i} onClick={() => onSelect(i)} />
                            </Grid>
                        ))}
                    </>
                )
            case 'Size':
                return (
                    <>
                        {values.map((size, i) => (
                            <Grid item>
                                <SizeOption key={`${size}-${i}`} size={size} selected={value === i} onClick={() => onSelect(i)} />
                            </Grid>
                        ))}
                    </>
                )
            default:
                return null;
        }
    }


    return (
        <>
            <Box marginY={1} paddingY={0.5}>
                <Grid container spacing={{ xs: 0.5, md: 2 }} alignItems='center' justifyContent='start'>
                    <Grid item>
                        <Typography>{name}</Typography>
                    </Grid>
                    {OptionElements()}
                </Grid>
            </Box>
            <Divider />
        </>
    )
    
}
 
export default Options;
