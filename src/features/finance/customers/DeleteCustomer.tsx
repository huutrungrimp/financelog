import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/hooks';
import { deleteCustomer } from './customerSlice';
import { Button, Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';


export default function DeleteCustomer() {

  const id = useParams().id;

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onClick = (event: React.MouseEvent) => {

    dispatch(deleteCustomer(id));
    setTimeout(() => {
      document.location.reload();
    }, 500);
    navigate(-1)

  }

  const theme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            color: 'white',
            textTransform: 'none'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            backgroundColor: purple[500]
          }
        }
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box className='deletePage'>
        <h5>Are you sure to delete the customer?</h5>
        <Box className='deleteConfirm'>
          <Button variant="text" onClick={() => { navigate(-1) }}>
            <Typography variant="body1">Cancel</Typography>
          </Button>
          <Button variant="text" onClick={onClick}>
            <Typography variant="body1">Delete</Typography>
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
