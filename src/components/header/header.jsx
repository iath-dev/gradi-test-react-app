import { Box, Breadcrumbs, Link, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import React from 'react';

const Header = ({ name = '' }) => {
    const theme = useTheme();
    const visible = useMediaQuery(theme.breakpoints.up('md'));

    if (!visible) return null;

    return (
        <Box paddingX={theme.spacing(4)} paddingY={theme.spacing(2)}>
            <Stack spacing={2}>
                <Breadcrumbs>
                    <Link underline='hover' key='1' color='inherit'>Catalog</Link>
                    <Link underline='hover' key='2' color='inherit'>Sneakers</Link>
                    <Link underline='hover' key='3' color='text.primary'>{name}</Link>
                </Breadcrumbs>
            </Stack>
        </Box>
    )
}
 
export default Header;
