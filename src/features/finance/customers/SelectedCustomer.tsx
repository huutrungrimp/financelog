import { Box, createTheme, TextField, ThemeProvider, Typography } from '@mui/material';
import { useState } from 'react';
import { Customer } from '../../../interface';

interface selectedCustomer {
    selectedcustomer: Customer
}

export default function SelectedCustomer({ selectedcustomer }: selectedCustomer) {

    const theme = createTheme({
        components: {
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        width: '100%',
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        marginBottom: '20px',
                    }
                }
            }
        }
    })

    const rate_offer = Object.keys(selectedcustomer).length===0?0:Number(selectedcustomer.rate_offer)
    const [rateOffer, setRateOffer] = useState(rate_offer)

    return (
        <ThemeProvider theme={theme}>
            <Box className='componentClass gx-0 px-0'>
                <h4>Selected Customer</h4>
                <Box>
                    <Box className='customerInfo'>
                        <TextField
                            label='Customer Name'
                            value={selectedcustomer.customerName}
                            type="text"
                        />
                        <TextField
                            label='Rate Offer ($/hour)'
                            value={rateOffer}
                            type="number"
                        />
                        <TextField
                            value={selectedcustomer.email}
                            name='email'
                            type="email"
                        />
                        <TextField
                            name='phone'
                            type={(selectedcustomer.phone === null) ? ('text') : ('number')}
                            value={(selectedcustomer.phone === null) ? ('') : (selectedcustomer.phone)}
                        />
                    </Box>
                    <Box className='customerAddress'>
                        <TextField
                            value={selectedcustomer.address}
                            type="text"
                        />
                        <TextField
                            value={selectedcustomer.city}
                            type="text"
                        />
                        <TextField
                            value={selectedcustomer.province}
                            type="text"
                        />
                        <TextField
                            value={selectedcustomer.postal}
                            type="text"
                        />
                        <TextField
                            value={selectedcustomer.country}
                            type="text"
                        />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}
