import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider, IconButton, Button } from '@mui/material';
import { muitheme } from '../../assets/styles/mui/styles';
import { green } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import TaskSearchOutput from './TaskSearchOutput';

export default function SearchTask() {
    const [titleInput, setTitleInput] = React.useState('');
    const [customerInput, setCustomerInput] = React.useState('')

    const theme = createTheme({
        components: {
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        width: '100%',
                        fontSize: '18px',
                        textAlign: 'left',
                        textTransform: 'none',
                        mx: '10px',
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
            }
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Box id='searchTask'>
                <TextField
                    label="Task title"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }}
                    value={titleInput}
                    onChange={(e) => { setTitleInput(e.target.value) }}
                    variant="standard"
                />
                <TextField
                    label="Customer Name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    value={customerInput}
                    onChange={(e) => { setCustomerInput(e.target.value) }}
                    variant="standard"
                />
                <TaskSearchOutput titleInput={titleInput} customerInput={customerInput} />
            </Box>
        </ThemeProvider>
    );
}