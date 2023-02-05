import React, { useState } from 'react'
import { Box, TextField, Button, ThemeProvider } from '@mui/material';
import { useAppDispatch } from '../../../app/hooks';
import { addCustomer } from './customerSlice';
import { useNavigate } from 'react-router-dom';
import { componentTheme } from '../../assets/styles/mui/styles';

export default function AddCustomer() {
    const [customerName, setCustomerName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postal, setPostal] = useState('')
    const [country, setCountry] = useState('')
    const [rateOffer, setRateOffer] = useState('')

    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const onSubmit = (e: React.MouseEvent) => {
        const customer = {            
            customerName: customerName,
            address: address,
            phone: phone,
            email: email,
            city: city,
            province: province,
            postal: postal,
            country: country,
            rate_offer: rateOffer,
        }
        dispatch(addCustomer(customer))
        navigate(-1)
    }


    return (
        <ThemeProvider theme={componentTheme}>
            <Box className='componentClass'>
                <h4>Customer Information</h4>
                <Box>
                    <Box className='customerInfo'>
                        <TextField
                            label='Name'
                            name='customerName'
                            value={customerName}
                            type="text"
                            onChange={e => setCustomerName(e.target.value)}
                        />
                        <TextField
                            label='Rate Offer'
                            type='number'
                            value={rateOffer}
                            onChange={e => setRateOffer(e.target.value)}
                        />
                        <TextField
                            label='Email'
                            value={email}
                            name='email'
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            label='Phone'
                            value={phone}
                            name='phone'
                            type="number"
                            onChange={e => setPhone(e.target.value)}
                        />
                    </Box>
                    <Box className='customerAddress'>
                        <TextField
                            label='Address'
                            name='address'
                            value={address}
                            type="text"
                            onChange={e => setAddress(e.target.value)}
                        />
                        <TextField
                            label='City'
                            value={city}
                            type="text"
                            onChange={e => setCity(e.target.value)}
                        />
                        <TextField
                            label='Province'
                            value={province}
                            type="text"
                            onChange={e => setProvince(e.target.value)}
                        />
                        <TextField
                            label='Postal'
                            value={postal}
                            type="text"
                            onChange={e => setPostal(e.target.value)}
                        />
                        <TextField
                            label='Country'
                            value={country}
                            type="text"
                            onChange={e => setCountry(e.target.value)}
                        />
                    </Box>
                </Box>
                <Button className='btnSubmit' onClick={onSubmit}>
                    Sumit
                </Button>
            </Box>
        </ThemeProvider>

    )
}
