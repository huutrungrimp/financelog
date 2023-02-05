import { Box, TextField, ThemeProvider, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Task } from '../../../interface';
import { dataContext } from '../../assets/data/dataProvider';
import { taskObject, variables } from '../../assets/data/variables';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { componentTheme } from '../../assets/styles/mui/styles';

export default function TaskDetail() {
    const username = useContext(dataContext)
    const id = useParams().id;
    const taskID = (id === undefined) ? ('') : (parseInt(id))

    const url = `${variables.urlbase}accounts/${username}/tasks`

    const [task, setTask] = React.useState<Task>(taskObject)
    const [isCompleted, setIsCompleted] = React.useState(false);

    React.useEffect(() => {
        fetch(url + '/' + taskID, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                setTask(res);
                setIsCompleted(res.isCompleted)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <ThemeProvider theme={componentTheme}>
            <Box className='componentClass'>            
                <Box className='taskStatus'>
                    <h3>Task Details</h3>
                    <FormControlLabel control={<Checkbox checked={isCompleted} />} label={(isCompleted === true) ? ('Completed') : ('Incompleted')} />
                </Box >
                {(Object.keys(task).length === 0) ? ('') : (
                    <Box>
                        <Box>
                            <Typography variant="h6" color="initial">Task overview</Typography>
                            <Box className='taskTiming'>
                                <TextField
                                    label='Title'
                                    // name='title'
                                    value={task.title}
                                    type="text"
                                />
                                <TextField
                                    label="Total hours"
                                    type="number"
                                    value={task.hours}
                                />
                                <TextField
                                    label="Rate ($ per hour)"
                                    type="number"
                                    value={task.task_rate}
                                />
                                <TextField
                                    label="Task pay"
                                    type="number"
                                    value={(task.task_pay === null) ? (0) : (task.task_pay)}
                                />
                            </Box>
                            <Typography variant="h6" color="initial">Task timing</Typography>
                            <Box className='taskTiming'>
                                <TextField
                                    label='Start Date'
                                    // name='customerName'
                                    value={task.date_time_start.slice(0, 10)}
                                    type="text"
                                />
                                <TextField
                                    label='Start Time'
                                    // name='customerName'
                                    value={task.date_time_start.slice(11, 16)}
                                    type="text"
                                />
                                <TextField
                                    label="End Date"
                                    // name='customerName'
                                    value={task.date_time_end.slice(0, 10)}
                                    type="text"
                                />
                                <TextField
                                    label="End Time"
                                    // name='customerName'
                                    value={task.date_time_end.slice(11, 16)}
                                    type="text"
                                />
                            </Box>
                            <Typography variant="h6" color="initial">Task earnings</Typography>
                            <Box className='taskTiming'>

                                <TextField
                                    label="Regular hours"
                                    type="number"
                                    value={(task.regular_hours === null) ? (0) : (task.regular_hours)}
                                />
                                <TextField
                                    label="Regular pay"
                                    type="number"
                                    value={(task.regular_pay===null)?(0):(task.regular_pay)}
                                />
                                <TextField
                                    label="Overtime hours"
                                    type="number"
                                    value={(task.overtime===null)?(0):(task.overtime)}
                                />
                                <TextField
                                    label="Overtime pay"
                                    type="number"
                                    value={(task.overtime_pay===null)?(0):(task.overtime_pay)}
                                />
                            </Box>
                            <Box className='taskTiming'>

                                <TextField
                                    label="Evening hours"
                                    type="number"
                                    value={(task.evening_hours===null)?(0):(task.evening_hours)}
                                />
                                <TextField
                                    label="Evening pay"
                                    type="number"
                                    value={(task.evening_pay===null)?(0):(task.evening_pay)}
                                />
                                <TextField
                                    label="Weekend hours"
                                    type="number"
                                    value={(task.weekend_hours === null) ? (0) : (task.weekend_hours)}
                                />
                                <TextField
                                    label="Weekend pay"
                                    type="number"
                                    value={(task.weekend_pay===null)?(0):(task.weekend_pay)}
                                />

                            </Box>
                            <Box className='taskTiming'>
                                <TextField
                                    label="Vacation pay-out"
                                    type="number"
                                    value={(task.vacation_pay_out === null) ? (0) : (task.vacation_pay_out)}
                                />
                                <TextField
                                    label="Ben lieu pay"
                                    type="number"
                                    value={(task.ben_lieu===null)?(0):(task.ben_lieu)}
                                />
                                <TextField
                                    label="Stat holiday"
                                    type="number"
                                    value={(task.stat_holiday === null) ? (0) : (task.stat_holiday)}
                                />
                                <TextField
                                    label="Floater"
                                    type="number"
                                    value={(task.floater === null) ? (0) : (task.floater)}
                                />
                            </Box>

                        </Box>
                        <Typography variant="h6" color="initial">Customer</Typography>
                        <Box className='customerInfo'>
                            <TextField
                                // name='customerName'
                                value={task.customer.customerName}
                                type="text"
                            />
                            <TextField
                                value={task.customer.email}
                                // name='email'
                                type="email"
                            />
                            <TextField
                                name='phone'                                
                                type={(task.customer.phone===null)?('text'):('number')}
                                value={(task.customer.phone===null)?(''):(task.customer.phone)}
                            />
                        </Box>
                        <Box className='customerAddress'>
                            <TextField
                                value={task.customer.address}
                                type="text"
                            />
                            <TextField
                                value={task.customer.city}
                                type="text"
                            />
                            <TextField
                                value={task.customer.province}
                                type="text"
                            />
                            <TextField
                                value={task.customer.postal}
                                type="text"
                            />
                            <TextField
                                value={task.customer.country}
                                type="text"
                            />
                        </Box>
                    </Box>
                )}
            </Box>
        </ThemeProvider>
    )
}
