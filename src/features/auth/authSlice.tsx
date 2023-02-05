import { createSlice } from "@reduxjs/toolkit";
import { variables } from "../assets/data/variables";

export interface AuthState {
    id: string;
    username: string;
    password: string;
    password2: string;
    isSigned: boolean
}

const url = variables.urlbase

const initialState: AuthState = {
    id: '',
    username: '',
    password: '',
    password2: '',
    isSigned: false,
}

const authSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action) => {
            fetch(url + 'accouts/signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            })
                .then(res => res.json())
                .then(res => {
                    localStorage.setItem('userDetail', JSON.stringify(res))
                    console.log(res)
                })
                .catch(err => {
                    console.error(err)
                })
        },

        signIn: (state, action) => {
            fetch(url + 'accounts/signin', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            })
                .then(res => res.json())
                .then(res => {
                    if (res['username'] !== undefined) {
                        localStorage.setItem('userDetail', JSON.stringify(res))
                    } else {
                        alert(res.message)
                    }
                })
                .catch(err => {
                    console.error(err)
                })
            return action.payload
        },
        signOut: (state, action) => {
            fetch(url + 'accounts/signout', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            })
                .then(res => res.json())
                .then(res => {
                    localStorage.removeItem('userDetail')
                })
                .catch(err => {
                    console.error(err)
                })
        }
    },
}
)

export const { signUp, signIn, signOut } = authSlice.actions;
export default authSlice.reducer
