import React, { useContext } from 'react'
import { Task } from '../../../interface'
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from 'react-router-dom';
import { customerObject, taskObject, variables } from '../../assets/data/variables';
import { useAppDispatch } from '../../../app/hooks';
import dayjs, { Dayjs } from 'dayjs';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Box, ThemeProvider } from '@mui/material';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Typography, Button } from '@mui/material';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SelectedCustomer from '../customers/SelectedCustomer';
import { updateTask } from './taskSlice';
import { dataContext } from '../../assets/data/dataProvider';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { componentTheme } from '../../assets/styles/mui/styles';
import { weekOfYear } from '../../assets/data/functionsourses';


export default function UpdateTask() {

    const data = useContext(dataContext)
    const id = useParams().id;
    const taskID = (id === undefined) ? ('') : (parseInt(id))
    const url = `${variables.urlbase}accounts/${data?.username}/tasks`
    const customer_url = `${variables.urlbase}accounts/${data?.username}/customers`

    const [task, setTask] = React.useState<Task>(taskObject)
    const [title, setTitle] = React.useState('');
    const [startDateTime, setStartDateTime] = React.useState<Dayjs | null>(dayjs(task.date_time_start));
    const [endDateTime, setEndDateTime] = React.useState<Dayjs | null>(dayjs(task.date_time_end));
    const [customers, setCustomers] = React.useState([customerObject])
    const [customerName, setCustomerName] = React.useState(task.customer.customerName);
    const [taskRate, setTaskRate] = React.useState(task.task_rate)
    const [isCompleted, setIsCompleted] = React.useState(task.isCompleted);

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
                setTitle(res.title)
                { (res.isCompleted === true) ? (setIsCompleted(true)) : (false) }
                setStartDateTime(res.date_time_start)
                setEndDateTime(res.date_time_end)
                setTaskRate(res.task_rate)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])


    React.useEffect(() => {
        fetch(customer_url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                setCustomers(res)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])


    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const start = new Date(dayjs(startDateTime).format('YYYY-MM-DD, HH:mm'))
    const end = new Date(dayjs(endDateTime).format('YYYY-MM-DD, HH:mm'))
    const diffHours = (isFinite(+start) && isFinite(+end)) ? (end.getHours() - start.getHours() + (end.getDate() - start.getDate()) * 24) : (0)

    const onChangeSelectCustomer = (event: SelectChangeEvent) => {
        setCustomerName(event.target.value as string);
    };

    const selectedCustomer = customers.filter(customer => customer.customerName === customerName)[0] || {}
    const onSubmit = (e: React.MouseEvent) => {

        const task = {
            id: id,
            isCompleted: isCompleted,
            username: data?.username,
            customerID: selectedCustomer.id,
            title: title,
            date_time_start: start.toISOString(),
            date_time_end: end.toISOString(),
            hours: diffHours,
            task_rate: taskRate,
            week_of_year: weekOfYear(start)
        }
        dispatch(updateTask(task))
        navigate('/' + data?.username + '/finance/tasks')
    }

    return (
        <ThemeProvider theme={componentTheme}>
            <Box className='componentClass'>
                <h4>Update Tasks</h4>
                <Box className='gx-0'>
                    <FormControlLabel control={<Checkbox checked={isCompleted} onChange={(e) => { setIsCompleted(e.target.checked) }} />} label={(isCompleted === true) ? ('Completed') : ('Incompleted')} />
                    <Box>
                        <TextField
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            label="Task name"
                        />
                    </Box>
                    <Box className='taskTiming'>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="Start Date & Time"
                                value={startDateTime}
                                ampm={false}
                                onChange={(newValue) => {
                                    setStartDateTime(newValue);
                                }}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="End Date & Time"
                                value={endDateTime}
                                ampm={false}
                                onChange={(newValue) => {
                                    setEndDateTime(newValue);
                                }}
                            />
                        </LocalizationProvider>

                        <TextField
                            label="No. of hours"
                            type="number"
                            value={diffHours}
                        />
                        {(diffHours <= 8) ? ('') : (
                            <TextField
                                label="Overtime"
                                type="number"
                                value={diffHours - 8}
                                sx={{ mb: { xs: 3 } }}
                            />
                        )}
                        <TextField
                            label="Rate ($ per hour)"
                            type={(taskRate === null) ? ('text') : ('number')}
                            value={taskRate}
                            onChange={(e) => { setTaskRate(parseFloat(e.target.value)) }}
                        />
                        <TextField
                            label="Task pay"
                            type="number"
                            value={(diffHours * taskRate).toFixed(2)}
                        />
                        {(diffHours <= 8) ? ('') : (
                            <TextField
                                label="Overtime pay"
                                type={(taskRate === null) ? ('text') : ('number')}
                                value={((diffHours - 8) * taskRate).toFixed(2)}
                                sx={{ mb: { xs: 3 } }}
                            />
                        )}
                    </Box>
                </Box>

                <Box className='customerInfo'>
                    <Box className='existingCustomer'>
                        <FormControl>
                            <InputLabel>Existing Customers</InputLabel>
                            <Select
                                value={customerName ? customerName : ''}
                                label="Existing Customers"
                                onChange={onChangeSelectCustomer}
                            >
                                {(Object.keys(customers).length === 0) ? (<div></div>) : (
                                    customers.map(customer => (
                                        <MenuItem key={customer.customerName} value={customer.customerName}>
                                            {customer.customerName}
                                        </MenuItem>
                                    ))
                                )}
                            </Select>
                        </FormControl>
                    </Box>
                    <IconButton className='addCustomer' onClick={(e: React.MouseEvent) => { navigate('/' + data?.username + '/finance/customers/new') }} >
                        <Avatar>
                            <AddIcon color='primary' />
                        </Avatar>
                        <Typography>Add new customers</Typography>
                    </IconButton>
                </Box>

                {(customerName === '') ? (<div></div>) : (
                    <div className='mx-0'>
                        <SelectedCustomer
                            selectedcustomer={selectedCustomer}
                        />
                    </div>
                )}
                <Button className='btnSubmit' onClick={onSubmit}>
                    Submit
                </Button>
            </Box>
        </ThemeProvider>
    )
}
