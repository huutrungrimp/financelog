import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../../interface";
import { existingUser } from "../../../app/service";
import { variables } from "../../assets/data/variables";

const initialState: Task = {
    id:'',
    isCompleted:false,
    customer: {
        id:'',
        user: {
            username: ''
        },
        customerName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        province: '',
        postal: '',
        country: '',
        rate_offer: ''
    },
    title: '',
    date_time_start: '',
    date_time_end: '',
    regular_hours: 0, 
    regular_pay: 0, 
    overtime: 0, 
    overtime_pay: 0,  
    evening_hours: 0, 
    evening_pay: 0, 
    weekend_hours: 0, 
    weekend_pay: 0, 
    vacation_pay_out: 0, 
    ben_lieu: 0,            
    stat_holiday: 0, 
    floater: 0, 
    task_rate: 0,
    hours: 0,
    task_pay: 0,
    week_of_year: 0,
}

const urlbase = variables.urlbase;
const url = `${urlbase}accounts/${existingUser.username}/tasks`
const taskSlice = createSlice({

    name: 'task',
    initialState,
    reducers: {
        createTask: (state, action) => {
            fetch(url + '/new/' + action.payload.customerID, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            })
                .then(res => res.json())
                .then(res => {

                })
                .catch(err => {
                    console.error(err)
                })

        },

        updateTask: (state, action) => {
            fetch(url + '/' + action.payload.id + '/update', {
                method: "PUT",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(action.payload)
            })
                .then(res => res.json())
                .then(res => {
                })
                .catch(err => {
                    console.error(err)
                })
        },
        deleteTask: (state, action) => {
            fetch(url + '/' + action.payload + '/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(res => {
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
})

export const { createTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer
