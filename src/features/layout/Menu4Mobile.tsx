import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box, createTheme, Link, ThemeProvider } from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import GroupIcon from '@mui/icons-material/Group';
import { dataContext } from '../assets/data/dataProvider';
import { muitheme } from '../assets/styles/mui/styles';
import { green } from '@mui/material/colors';



export default function Menu4Mobile() {

    const data = React.useContext(dataContext)
    const theme = createTheme({
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        fontSize: '18px',
                        textAlign: 'left',
                        textTransform: 'none',
                        marginLeft: '10px',
                        justifyContent: 'left',
                        [muitheme.breakpoints.down('sm')]: {
                            minHeight: '10px',
                        },
                        [muitheme.breakpoints.up('md')]: {
                            minHeight: '20px',
                        },
                        [muitheme.breakpoints.up('lg')]: {
                            minHeight: '30px',
                        },

                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: 20,
                        textTransform: 'none',
                        backgroundColor: green[100],
                        borderRadius: 10,
                        minWidth: 150,
                        maxHeight: 40,
                        borderLeft: 60
                    },
                },
            },

            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        margin: 5,
                        border: 1,
                        borderRadius: 5
                    },
                },
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderWidth: 1,
                            borderColor: "green"
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "blue"
                        }
                    }
                },
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Box>
                {(data?.username === '') ? (
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <LoginIcon color='primary' fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Sign In</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <AppRegistrationIcon color='primary' fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Sign Up</ListItemText>
                        </MenuItem>
                    </MenuList>
                ) : (
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <DashboardIcon color='primary' fontSize="small" />
                            </ListItemIcon>
                            <ListItemText><Link href={`${data?.username}/finance`}>Dashboard</Link></ListItemText>
                        </MenuItem>

                        <MenuItem>
                            <ListItemIcon>
                                <GroupIcon color='primary' fontSize="small" />
                            </ListItemIcon>
                            <ListItemText><Link href={`${data?.username}/finance/customers`}>Customers</Link></ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <LogoutIcon color='primary' fontSize="small" />
                            </ListItemIcon>
                            <ListItemText><Link href={`/signout`}>Sign Out</Link></ListItemText>
                        </MenuItem>
                    </MenuList>
                )}
            </Box>
        </ThemeProvider>
    );
}