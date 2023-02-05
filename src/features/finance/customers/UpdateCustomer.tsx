import { Box, TextField, Typography, IconButton, ThemeProvider } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { componentTheme } from '../../assets/styles/mui/styles';
import { useAppDispatch } from '../../../app/hooks';
import { updateCustomer } from './customerSlice';
import { variables } from '../../assets/data/variables';
import Update from '@mui/icons-material/Update';
import { dataContext } from '../../assets/data/dataProvider';

export default function UpdateCustomer() {
    const data = useContext(dataContext)
    const key = useParams().id;
    const customerID = (key === undefined) ? ('') : (parseInt(key))
    const navigate = useNavigate()

    const url = `${variables.urlbase}accounts/${data?.username}/customers`
    const dispatch = useAppDispatch()

    const [customerName, setCustomerName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [postal, setPostal] = useState('')
    const [country, setCountry] = useState('')
    const [rateOffer, setRateOffer] = useState('')

    React.useEffect(() => {
        fetch(url + '/' + customerID + '/update', {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                setCustomerName(res.customerName);
                setEmail(res.email);
                setAddress(res.address);
                setPhone(res.phone);
                setCity(res.city);
                setProvince(res.province);
                setPostal(res.postal);
                setCountry(res.country);
                setRateOffer(res.rate_offer)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])


    const onClick = (e: React.MouseEvent) => {
        const customer = {
            customerName: customerName,
            address: address,
            phone: phone,
            email: email,
            city: city,
            province: province,
            postal: postal,
            country: country,
            rate_offer: rateOffer
        }
        dispatch(updateCustomer({
            id: key ? key : '',
            customer
        }));
        navigate(-1)
    }

    return (
        <ThemeProvider theme={componentTheme}>
            <Box className='componentClass'>
                <h4>Update Customer</h4>
                <Box>
                    <Box className='customerInfo'>
                        <TextField
                            label='Customer Name'
                            name='customerName'
                            value={customerName}
                            type="text"
                            onChange={e => setCustomerName(e.target.value)}
                        />
                        <TextField
                            label='Rate Offer ($/hour)'
                            type={rateOffer === null ? 'text' : 'number'}
                            value={rateOffer === null ? '' : rateOffer}
                            onChange={e => setRateOffer(e.target.value)}
                        />
                        <TextField
                            value={email}
                            name='email'
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            value={phone}
                            name='phone'
                            type="number"
                            onChange={e => setPhone(e.target.value)}
                        />
                    </Box>
                    <Box className='customerAddress'>
                        <TextField
                            name='address'
                            value={address}
                            type="text"
                            onChange={e => setAddress(e.target.value)}
                        />
                        <TextField
                            name='city'
                            value={city}
                            type="text"
                            onChange={e => setCity(e.target.value)}
                        />
                        <TextField
                            name='province'
                            value={province}
                            type="text"
                            onChange={e => setProvince(e.target.value)}
                        />
                        <TextField
                            name='postal'
                            value={postal}
                            type="text"
                            onChange={e => setPostal(e.target.value)}
                        />
                        <TextField
                            name='country'
                            value={country}
                            type="text"
                            onChange={e => setCountry(e.target.value)}
                        />
                    </Box>
                </Box>

                <IconButton aria-label="" onClick={onClick}>
                    <Update color='primary' />
                    <Typography variant="body1" color="primary">Update</Typography>
                </IconButton>
            </Box>
        </ThemeProvider>

    )
}
