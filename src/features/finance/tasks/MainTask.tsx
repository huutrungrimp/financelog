import * as React from 'react';
import Box from '@mui/material/Box';
import { mainComponent } from '../../assets/styles/mui/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Outlet, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { dataContext } from '../../assets/data/dataProvider';


export default function MainTask() {
    const data = React.useContext(dataContext)

    const navigate = useNavigate()

    return (
        <ThemeProvider theme={mainComponent}>
            <div className='mainComponent gx-0'>
                <Box className='mainComponentLeft'>
                    <ButtonGroup>
                        <Button onClick={() => { navigate('/' + data?.username + '/finance/tasks') }}>Tasks</Button>
                        <Button onClick={() => { navigate('/' + data?.username + '/finance/tasks/calendar') }}>Calendar</Button>
                        <Button onClick={() => { navigate('/' + data?.username + '/finance/tasks/new') }}>New Tasks</Button>
                        <Button onClick={() => { navigate('/' + data?.username + '/finance/tasks/search') }}>Search Tasks</Button>
                    </ButtonGroup>

                </Box>
                <Box className='mainComponentRight'>                    
                    <Outlet />
                </Box>
            </div>
        </ThemeProvider>
    );
}