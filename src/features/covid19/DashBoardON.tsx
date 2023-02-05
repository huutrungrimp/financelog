import * as React from 'react';
import Box from '@mui/material/Box';
import { mainComponent } from '../assets/styles/mui/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Outlet, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { dataContext } from '../assets/data/dataProvider';



export default function DashBoardON() {

    const data = React.useContext(dataContext)
    const navigate = useNavigate()

    return (
        <ThemeProvider theme={mainComponent}>
            <div className='mainComponent gx-0' id='covid19DB'>
                <h3>Covid-19 Status in Ontario</h3>
                <Box className='mainComponentLeft my-3' style={{ backgroundColor: 'tranparent' }}>
                    <ButtonGroup>
                        <Button onClick={() => { navigate('/' + data?.username + '/covid19') }}>Covid-19 status</Button>
                        <Button onClick={() => { navigate('/' + data?.username + '/covid19/age') }}>Cases by age</Button>
                        <Button onClick={() => { navigate('/' + data?.username + '/covid19/gender') }}>Cases by gender</Button>
                    </ButtonGroup>
                </Box>
                <Box className='mainComponentRight my-2' style={{ backgroundColor: 'tranparent' }}>
                    <Outlet />
                </Box>
            </div>
        </ThemeProvider>
    );
}