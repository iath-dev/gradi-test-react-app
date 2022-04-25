import { Grid, Typography, Divider, Box, Stack, Button, Dialog, DialogTitle, DialogContent, DialogActions, Chip } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CurrencyPipe from '../../pipes/currency';
import AmountButton from '../amount/amountButton';
import Carrousel from '../carrousel/carrousel';
import Header from '../header/header';
import Options from '../options/options';

import './product.css';

const Product = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [order, setOrder] = useState({
        options: [],
        amount: 0
    })
    const [orderDetails, setOrderDetails] = useState(null)

    const onSelectOption = (value, index) => {
        let options = order.options;

        if (options.length === 0) {
            options = new Array(data.options.length).fill(0);
        }

        setOrder({
            ...order,
            options: options.map((v = '', i) => i === index ? value : v)
        })
    }

    const onIncrementAmount = () => {
        console.log('increment');
        setOrder(value => ({
            ...order,
            amount: value.amount + 1
        }))
    }
    
    const onDecreaseAmount = () => {
        console.log('decrease');

        if (order.amount > 0) {
            setOrder({
                ...order,
                amount: order.amount - 1
            })
        }
    }

    const handleOpenDetails = () => {
        setOrderDetails(null);
        getOptionElement();
        setOpen(true);
    }

    const getOptionElement = () => {
        const details = order.options.map((opt, i) => data.options[i].values[opt])

        const res = data.variants.find(v => v.options.every((d, i) => details[i] === d));
        
        setOrderDetails(res)
    }

    useEffect(() => {
      
        const values= new Array(data.options.length).fill(0);

        setOrder({
            amount: 0,
            options: values
        })
        
    }, [data])

    return (
        <>
            <Header name={data.title} />
            <Box className='container'>
                <Carrousel images={data.images} />
                <Box>
                    <Box marginBottom={2}>
                        <Typography variant='caption' color="gray">{data.vendor}</Typography>
                        <Typography variant='h4'>{data.title}</Typography>
                        <Box display='flex' alignItems='end' marginBottom={1}>
                            <Typography variant='h5' style={{ marginRight: '8px' }}>{CurrencyPipe(data.price)}</Typography>
                            <Typography variant='caption' color='GrayText'>Max: {CurrencyPipe(data.price_max)}</Typography>
                        </Box>
                        <Stack direction='row' spacing={1}>
                            {data.tags.map(tag => (
                                <Chip label={tag} color='primary' variant='outline' size='small' />
                            ))}
                        </Stack>
                    </Box>
                    <Divider />
                    {data.options.map((option, index) => (
                        <Options
                            key={`options-${option.name}-${option.position}`}
                            {...option}
                            value={order.options[index]}
                            onSelect={(i) => onSelectOption(i, index)}
                        />
                    ))}
                    <Box paddingY={1}>
                        <Grid container spacing={1} alignItems='center'>
                            <Grid item xs={5} md={3}>
                                <AmountButton value={order.amount} onIncrement={onIncrementAmount} onDecrease={onDecreaseAmount} />
                            </Grid>
                            <Grid item xs={2} md={6}></Grid>
                            <Grid item xs={5} md={3}>
                                <Typography variant='caption'>Total: <strong>{ CurrencyPipe(order.amount * data.price) }</strong></Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box paddingY={1}>
                        <Stack direction='row' spacing={{ xs: 0.5, md: 2 }} alignItems='center' justifyContent='space-between'>
                            <Button variant='outlined' fullWidth>Add to favorite</Button>
                            <Button variant='contained' fullWidth disabled={order.amount === 0} onClick={handleOpenDetails}>Add to cart</Button>
                        </Stack>
                    </Box>
                    <Box paddingY={1}>
                        <Typography variant='body1'>
                            <span dangerouslySetInnerHTML={{ __html: data.description }} />
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
            >
                {orderDetails && (
                    <>
                        <DialogTitle>{orderDetails.name}</DialogTitle>
                        <DialogContent>
                            <Typography variant='subtitle2'>Total: <strong>{ CurrencyPipe(order.amount * orderDetails.price) }</strong></Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setOpen(false)}>Seguir</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </>
    )
}

export default Product;
