import { Add, Remove } from '@mui/icons-material';
import { IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const ButtonBox = styled(Stack)`
    border: 1px solid lightgray;
    border-radius: 8px;
`

const AmountButton = ({ value, onIncrement, onDecrease }) => {
    return ( 
        <ButtonBox direction='row' spacing={1} alignItems='center' justifyContent='space-around'>
            <IconButton size='small' color='primary' onClick={onDecrease}>
                <Remove />
            </IconButton>
            <Typography variant='body2'>{value}</Typography>
            <IconButton size='small' color='primary' onClick={onIncrement}>
                <Add />
            </IconButton>
        </ButtonBox>
    );
}
 
export default AmountButton;
