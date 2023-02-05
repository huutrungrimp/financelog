import { Box, TextField, ThemeProvider } from '@mui/material';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { componentTheme } from '../../assets/styles/mui/styles';
import { Customer } from '../../../interface';
import { dataContext } from '../../assets/data/dataProvider';
import { customerObject, variables } from '../../assets/data/variables';


export default function CustomerDetail() {
    const data = useContext(dataContext)
    const id = useParams().id;
    const customerID = (id === undefined) ? ('') : (parseInt(id))

    const url = `${variables.urlbase}accounts/${data?.username}/customers`
    const [customer, setCustomer] = React.useState<Customer>(customerObject)
    
    React.useEffect(() => {
        fetch(url + '/' + customerID, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                setCustomer(res)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <ThemeProvider theme={componentTheme}>
            <Box className='componentClass'>
                <h4>Customer Detail</h4>
                {(Object.keys(customer).length === 0) ? ('') : (
                    <Box>
                        <Box className='customerInfo'>
                            <TextField
                                label='Customer Name'
                                name='customerName'
                                value={customer.customerName}
                                type="text"
                            />
                            <TextField
                                label='Rate Offer ($/hour)'
                                name='Rate Offer'
                                value={customer.rate_offer}
                                type="number"
                            />
                            <TextField
                                value={customer.email}
                                name='email'
                                type="email"
                            />
                            <TextField
                                name='phone'
                                type={(customer.phone !== null) ? ('text') : ('number')}
                                value={(customer.phone !== null) ? (customer.phone.toString()) : ('')}
                            />
                        </Box>
                        <Box className='customerAddress'>
                            <TextField
                                value={customer.address}
                                type="text"
                            />
                            <TextField
                                value={customer.city}
                                type="text"
                            />
                            <TextField
                                value={customer.province}
                                type="text"
                            />
                            <TextField
                                value={customer.postal}
                                type="text"
                            />
                            <TextField
                                value={customer.country}
                                type="text"
                            />
                        </Box>
                    </Box>
                )}
            </Box>
        </ThemeProvider>
    )
}
