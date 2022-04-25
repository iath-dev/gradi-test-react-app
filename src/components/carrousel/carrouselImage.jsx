import styled from '@emotion/styled';
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import { Transition } from "react-transition-group";

const CarrouselImgMini = styled('img')`
    width: 64px;
    height: 64px;
    border-radius: 8px;
    object-fit: cover;

    :hover {
        opacity: 50%;
        cursor: pointer;
    }
`;

const DotSymbol = styled('span')`
    font-size: 24px;
    cursor: pointer;

    :hover {
        cursor: pointer;
    }
`;

const CarrouselImage = ({ image = '', selected = false, onClick }) => {
    const theme = useTheme();
    const visible = useMediaQuery(theme.breakpoints.up('md'));

    return ( 
        <div onClick={onClick}>
            {visible ? (
                <>
                    {selected ? null : (
                        <Transition in={!selected} timeout={500} mountOnEnter appear>
                            <CarrouselImgMini src={image} alt='carrousel item mini' />
                        </Transition>
                    )}
                </>
            ) : (
                <DotSymbol style={{ color: selected ? 'black' : 'lightgray' }}>&bull;</DotSymbol>
            )}
        </div>
    );
}
 
export default CarrouselImage;
