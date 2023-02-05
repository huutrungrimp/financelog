import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import UpdateIcon from '@mui/icons-material/Update';
import { IconButton, ThemeProvider, Link} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import { dataContext } from '../../assets/data/dataProvider';
import { componentTheme } from '../../assets/styles/mui/styles';



export default function IncompletedTask() {
    const navigate = useNavigate()
    const tasks = React.useContext(dataContext)?.tasks
    const username = React.useContext(dataContext)?.username

    return (
        <ThemeProvider theme={componentTheme}>
            <Box className='componentClass'>
                <h4>Incompleted Tasks</h4>
                <Box>
                    {Object.keys(tasks).filter((i) => tasks[parseInt(i)].isCompleted === false).map((k) => (
                        <Box key={'incompletedTasks' + tasks[k].id}>
                            <Box display="flex" justifyContent='space-between' key={'task' + tasks[k].id}>
                                <Box sx={{ width: '40%'}}>
                                    <IconButton className='gx-0 mx-0 px-0'>
                                        <Typography variant="body1" color="initial">
                                            <Link href={'/' + username + '/finance/tasks/' + tasks[k].id}>
                                                {tasks[k].title}
                                            </Link>
                                        </Typography>
                                    </IconButton>
                                </Box>
                                <Box sx={{ width: '40%' }}>
                                    <IconButton aria-label="">
                                        <CancelIcon sx={{ color: 'red', marginRight: '10px' }} />
                                        <Typography variant="body1" color="initial">Incompleted</Typography>
                                    </IconButton>
                                </Box>
                                <Box sx={{ width: '10%' }}>
                                    <IconButton aria-label="" onClick={() => navigate('/' + username + '/finance/tasks/' + tasks[k].id + '/delete')}>
                                        <DeleteIcon color='secondary' />
                                    </IconButton>
                                </Box>
                                <Box sx={{ width: '10%' }}>
                                    <IconButton onClick={() => { navigate('/' + username + '/finance/tasks/' + tasks[k].id + '/update') }}>
                                        <UpdateIcon color='primary' />
                                    </IconButton>
                                </Box>
                            </Box>

                        </Box>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
}