import React, { useContext, useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import { dataContext } from '../../assets/data/dataProvider';
import { Box, Checkbox, FormControlLabel, IconButton, TextField, ThemeProvider, Typography } from '@mui/material';
import { componentTheme } from '../../assets/styles/mui/styles';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { blue } from '@mui/material/colors';

export function TaskCalendar() {
  const navigate = useNavigate()
  const tasks = useContext(dataContext)?.tasks
  const username = useContext(dataContext)?.username

  const [taskID, setTaskID] = useState('')
  const [dayView, setDayView] = useState('none');
  const [taskView, setTaskView] = useState('none');

  const taskCalendar = Object.keys(tasks).map(i => {
    return {
      id: tasks[parseInt(i)].id.toString(),
      title: tasks[parseInt(i)].title,
      start: tasks[parseInt(i)].date_time_start,
      end: tasks[parseInt(i)].date_time_end,
      color: 'white',
      backgroundColor: (tasks[parseInt(i)].isCompleted===true)?('green'):('red')
    }
  })

  const taskIndex = Object.keys(tasks).filter((i) => tasks[parseInt(i)].id === parseInt(taskID))[0]
  const selectedTask = tasks[parseInt(taskIndex)]

  return (
    <div className='row'>
      <div>
        <FullCalendar
          timeZone='America/New_York'
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={taskCalendar}
          eventClick={(info) => { setTaskView('block'); setDayView('none'); setTaskID(info.event.id) }}
          aspectRatio={1.8}
          dateClick={(info) => { setDayView('block'); setTaskView('none'); navigate(`/${username}/finance/tasks/new`) }}
          headerToolbar={{
            left: 'prevYear, nextYear',
            center: 'title'
          }}
          eventDisplay='block'
          firstDay={8}
        />
      </div>
      <div style={{ display: taskView }} className="calendar-task">
        <ThemeProvider theme={componentTheme}>
          <Box>
            <Box className="d-flex justify-content-end">
              <IconButton onClick={() => setTaskView('none')} >
                <CloseIcon />
              </IconButton>
            </Box>
            {(selectedTask === undefined) ? (<div></div>) : (
              <Box className='px-2'>
                <Box className='taskStatus'>
                  <h4>Task Details</h4>
                  <FormControlLabel
                    control={<Checkbox checked={selectedTask.isCompleted} />}
                    label={(selectedTask?.isCompleted === true) ? ('Completed') : ('Incompleted')}
                  />
                </Box >
                <Box>
                  <Box>
                    <TextField
                      name='customerName'
                      value={selectedTask.title}
                      type="text"
                    />
                  </Box>
                  <Box className='taskTiming'>
                    <TextField
                      label='Start Date'
                      name='customerName'
                      value={selectedTask.date_time_start.slice(0, 10)}
                      type="text"
                    />
                    <TextField
                      label='Start Time'
                      name='customerName'
                      value={selectedTask.date_time_start.slice(11, 16)}
                      type="text"
                    />
                    <TextField
                      label="End Date"
                      name='customerName'
                      value={selectedTask.date_time_end.slice(0, 10)}
                      type="text"
                    />
                    <TextField
                      label="End Time"
                      name='customerName'
                      value={selectedTask.date_time_end.slice(11, 16)}
                      type="text"
                    />
                  </Box>
                  <Box className='taskTiming'>
                    <TextField
                      label="No. of hours"
                      type="number"
                      value={selectedTask.hours}
                    />

                    <TextField
                      label="Rate ($ per hour)"
                      type="number"
                      value={selectedTask.task_rate}
                    />

                    <TextField
                      label="Task pay"
                      type="number"
                      value={(selectedTask.task_pay === null) ? (0) : (selectedTask.task_pay)}
                    />
                  </Box>
                </Box>
                <Typography variant="h4" color="initial">Customer</Typography>
                <Box className='customerInfo'>
                  <TextField
                    name='customerName'
                    value={selectedTask.customer.customerName}
                    type="text"
                  />
                  <TextField
                    value={(selectedTask.customer.email === null) ? ('') : (selectedTask.customer.email)}
                    name='email'
                    type="email"
                  />
                  <TextField
                    name='phone'
                    type={(selectedTask?.customer?.phone === null) ? ('text') : ('number')}
                    value={(selectedTask?.customer?.phone === null) ? ('') : (selectedTask?.customer?.phone)}
                  />
                </Box>
                <Box className='customerAddress'>
                  <TextField
                    value={selectedTask.customer.address}
                    type="text"
                  />
                  <TextField
                    value={selectedTask.customer.city}
                    type="text"
                  />
                  <TextField
                    value={selectedTask.customer.province}
                    type="text"
                  />
                  <TextField
                    value={selectedTask.customer.postal}
                    type="text"
                  />
                  <TextField
                    value={selectedTask.customer.country}
                    type="text"
                  />
                </Box>
              </Box>
            )}
          </Box>
        </ThemeProvider>

      </div>

    </div>
  )
}