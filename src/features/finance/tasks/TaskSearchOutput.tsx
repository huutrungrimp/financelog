import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import UpdateIcon from '@mui/icons-material/Update';
import { IconButton, ThemeProvider, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Task } from '../../../interface';
import { taskObject, variables } from '../../assets/data/variables';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import { dataContext } from '../../assets/data/dataProvider';
import { componentTheme } from '../../assets/styles/mui/styles';

interface SearchInput {
    titleInput: string;
    customerInput: string
}


export default function TaskSearchOutput({ titleInput, customerInput }: SearchInput) {
    const data = React.useContext(dataContext)
    const navigate = useNavigate()

    const url = `${variables.urlbase}accounts/${data?.username}/tasks`
    const [tasks, setTasks] = React.useState<Array<Task>>([taskObject])

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
                setTasks(res)
            })
            .catch(err => {
                console.error(err)
            })
    }, [data?.username])    

    return (
        <ThemeProvider theme={componentTheme}>
            {(titleInput === '' && customerInput === '') ? (<div></div>) : (
                <Box>
                    {tasks.map(task => (
                        (task.title.toLowerCase().includes(titleInput.toLowerCase()) === false) ? (<div></div>) : (
                            (task.customer.customerName.toLowerCase().includes(customerInput.toLowerCase()) === false) ? ('') : (
                                <Box display="flex" justifyContent='space-between' key={'task' + task.id}>
                                    <Box sx={{ width: '40%', paddingLeft: { xs: '10px', md: '20px' } }}>
                                        <IconButton aria-label="">
                                            <Typography variant="body1" color="initial">
                                                <Link href={'/' + data?.username + '/finance/tasks/' + task.id}>
                                                    {task.title}
                                                </Link>
                                            </Typography>
                                        </IconButton>
                                    </Box>
                                    {(task.isCompleted === false) ? (
                                        <Box sx={{ width: '40%' }}>
                                            <IconButton aria-label="">
                                                <CheckIcon color='secondary' sx={{ marginRight: '10px' }} />
                                                <Typography variant="body1" color="initial">Completed</Typography>
                                            </IconButton>
                                        </Box>
                                    ) : (
                                        <Box sx={{ width: '30%' }}>
                                            <IconButton aria-label="">
                                                <CancelIcon sx={{ color: 'red', marginRight: '10px' }} />
                                                <Typography variant="body1" color="initial">Incompleted</Typography>
                                            </IconButton>
                                        </Box>
                                    )}
                                    <Box sx={{ width: '10%' }}>
                                        <IconButton aria-label="" onClick={() => navigate('/' + data?.username + '/finance/tasks/' + task.id + '/delete')}>
                                            <DeleteIcon color='secondary' />
                                        </IconButton>
                                    </Box>
                                    <Box sx={{ width: '10%' }}>
                                        <IconButton onClick={() => { navigate('/' + data?.username + '/finance/tasks/' + task.id + '/update') }}>
                                            <UpdateIcon color='primary' />
                                        </IconButton>
                                    </Box>
                                </Box>
                            )
                        )
                    ))}
                </Box>
            )}
        </ThemeProvider>
    );
}