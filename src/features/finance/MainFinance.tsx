import * as React from 'react';
import { ThemeProvider, ButtonGroup, Button } from '@mui/material';
import { topPanelTheme } from '../assets/styles/mui/styles';
import { Outlet, useNavigate } from 'react-router-dom';
import { dataContext } from '../assets/data/dataProvider';

export default function MainFinance() {
    const navigate = useNavigate()
    const username = React.useContext(dataContext)

    return (
        <div>
            <div className='top-panels gx-0'>
                <ThemeProvider theme={topPanelTheme}>
                    <ButtonGroup
                        variant="contained"
                        size="large"
                    >
                        <Button onClick={() => { navigate('/' + username?.username + '/finance') }}>Dashboard</Button>
                        <Button onClick={() => { navigate('/' + username?.username + '/finance/tasks') }}>Tasks</Button>
                        <Button onClick={() => { navigate('/' + username?.username + '/finance/customers') }}>Customers</Button>
                    </ButtonGroup>
                </ThemeProvider>
            </div>
            <div className='bottom-panels'>
                <Outlet />
            </div>
        </div>
    );
}