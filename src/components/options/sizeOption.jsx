import { Chip } from '@mui/material';
import React from 'react';

const SizeOption = ({ size, selected = false, onClick }) => {
    return (
        <Chip label={size} color={selected ? 'primary' : 'info'} variant={selected ? 'filled' : 'outlined'} size='small' onClick={onClick} />
    );
}
 
export default SizeOption;
