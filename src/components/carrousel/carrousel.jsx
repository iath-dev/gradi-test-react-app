import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import CarrouselImage from './carrouselImage';

import './carrousel.css';

// const CarrouselImage = styled('img')`
//     width: 6rem;
//     height: 6rem;
//     border-radius: 4px;

//     :hover {
//         cursor: pointer;
//     }
// `

const Carrousel = ({ images = [] }) => {
    const [position, setPosition] = useState(0);

    const handleChange = (index) => {
        setPosition(index)
    } 

    return ( 
        <Box
            // display='flex'
            // flexDirection='column'
            // justifyContent='center'
            // alignItems='center'
            className='carrousel'
        >
            <img className='carrousel-image-big' src={images[position]} alt='carrousel big' />
            <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
                {images.map((img, i) => (
                    <CarrouselImage image={img} selected={position === i} onClick={() => handleChange(i)} />
                ))}
            </Stack>
            {/* <Grid container spacing={1} justifyContent='center' alignItems='center'>
                {images.map((img, i) => position === i ? null : (
                    <Grid item key={`carrousel-img-${i}`}>
                        <CarrouselImage src={img} alt={`carrousel item ${i}`} onClick={() => handleChange(i)} />
                    </Grid>
                ))}
            </Grid> */}
        </Box>
    );
}
 
export default Carrousel;
