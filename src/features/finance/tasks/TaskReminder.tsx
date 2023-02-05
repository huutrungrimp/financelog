import { Box, Button, IconButton, Typography } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import React, { useContext, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '../../assets/data/dataProvider';

export default function TaskReminder() {

    const username = useContext(dataContext)?.username;
    const [showReminder, setShowReminder] = useState('none');
    var now = new Date();
    var timeTillalert = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 15, 0, 0).getTime() - now.getTime();
    if (timeTillalert < 0) {
        timeTillalert += 86400000; // it's after alert time, try alert time tomorrow.
    }
    setTimeout(function () { setShowReminder('block') }, timeTillalert);
    const navigate = useNavigate()

    return (
        <div style={{ display: showReminder }} className="show-reminder py-3">            
            <Typography variant="h5" color="initial">Did you work today?</Typography>
            <Box className='deleteConfirm py-0'>
                <Button variant="text" onClick={() => { navigate(-1) }}>
                    <Typography sx={{color: 'white'}} variant="body1">No</Typography>
                </Button>
                <Button variant="text" onClick={() => { setShowReminder('none'); navigate('/' + username + '/finance/tasks/new') }}>
                    <Typography sx={{color: 'white'}} variant="body1">Yes</Typography>
                </Button>
            </Box>
        </div>
    )
}
