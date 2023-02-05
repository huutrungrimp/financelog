import { createSlice } from "@reduxjs/toolkit";
import { Customer } from "../../../interface";
import { existingUser } from "../../../app/service";
import { variables } from "../../assets/data/variables";


const initialState: Customer = {
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
}


const urlbase = variables.urlbase
const url = `${urlbase}accounts/${existingUser.username}/customers`

const customerSlice = createSlice({

    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            fetch(url + '/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.error(err)
                })

        },

        updateCustomer: (state, action) => {
            const customer = action.payload.customer
            fetch(url + '/' + action.payload.id + '/update', {
                method: "PUT",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    customerName: customer.customerName.toString(),
                    address: customer.address.toString(),
                    phone: customer.phone.toString(),
                    email: customer.email.toString(),
                    city: customer.city.toString(),
                    province: customer.province.toString(),
                    postal: customer.postal.toString(),
                    country: customer.country.toString(),
                    rate_offer: customer.rate_offer.toString(),
                })

            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.error(err)
                })
        },
        deleteCustomer: (state, action) => {
            fetch(url + '/' + action.payload + '/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
})

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer
