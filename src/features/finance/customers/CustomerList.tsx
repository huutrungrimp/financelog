import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import UpdateIcon from '@mui/icons-material/Update';
import { IconButton, ThemeProvider, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Customer } from '../../../interface';
import { customerObject, variables } from '../../assets/data/variables';
import { dataContext } from '../../assets/data/dataProvider';
import { componentTheme } from '../../assets/styles/mui/styles';



export default function CustomerList() {
    const navigate = useNavigate()
    const data = React.useContext(dataContext)

    const url = `${variables.urlbase}accounts/${data?.username}/customers`
    const [customers, setCustomers] = React.useState<Array<Customer>>([customerObject])

    React.useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                setCustomers(res)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <ThemeProvider theme={componentTheme}>
            <Box className='componentClass'>
                <h4>Existing customers</h4>
                <Box>
                    {customers.map(customer => (
                        <Box display="flex" justifyContent='space-between' key={customer.id + customer.customerName.replace(/\s+/g, '-')}>
                            <Box sx={{ width: '60%'}}>
                                <Link href={'/' + data?.username + '/finance/customers/' + customer.id}>{customer.customerName}</Link>
                            </Box>
                            <Box sx={{ width: '20%' }}>
                                <IconButton aria-label="" onClick={() => navigate('/' + data?.username + '/finance/customers/' + customer.id + '/delete')}>
                                    <DeleteIcon color='secondary' />
                                </IconButton>
                            </Box>
                            <Box sx={{ width: '20%' }}>
                                <IconButton onClick={() => { navigate('/' + data?.username + '/finance/customers/' + customer.id + '/update') }}>
                                    <UpdateIcon color='primary' />
                                </IconButton>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <IconButton onClick={() => { navigate('/' + data?.username + '/finance/customers/' + 'new') }}>
                    <ControlPointIcon sx={{ mx: 1, fontSize: '20', color: 'secondary.dark' }} fontSize="medium" color='success' />
                    <Typography color='black'>New Customer</Typography>
                </IconButton>
            </Box>
        </ThemeProvider>
    );
}