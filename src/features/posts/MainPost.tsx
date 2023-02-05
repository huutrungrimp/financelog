import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Outlet, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { dataContext } from '../assets/data/dataProvider';
import { topPanelTheme } from '../assets/styles/mui/styles';


export default function MainPost() {
    const data = React.useContext(dataContext)
    const navigate = useNavigate()
   

    return (
        <div>
            <div className='top-panels gx-0'>
                <ThemeProvider theme={topPanelTheme}>
                    <ButtonGroup
                        variant="contained"
                        size="large"
                    >
                        <Button onClick={() => { navigate('/' + data?.username + '/posts') }}>Posts</Button>
                        <Button onClick={() => { navigate('/' + data?.username + '/posts/new') }}>New Posts</Button>
                        <Button onClick={() => { navigate('/' + data?.username + '/posts/search') }}>Search Posts</Button>
                    </ButtonGroup>
                </ThemeProvider>
            </div>
            <div className='bottom-panels'>
                <Outlet />
            </div>
        </div>

    );
}