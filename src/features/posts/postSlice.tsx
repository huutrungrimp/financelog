import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../interface";
import { existingUser, variables } from "../assets/data/variables";

const initialState: Post = {
    id: '',
    title: '',
    content: '',
    dated_on: '',
}

const urlbase = variables.urlbase;
const url = `${urlbase}accounts/${existingUser.username}/posts`
const postSlice = createSlice({

    name: 'post',
    initialState,
    reducers: {
        createPost: (state, action) => {
            fetch(url + '/new', {
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

        updatePost: (state, action) => {
            console.log(action.payload)
            fetch(url + '/' + action.payload.post.id + '/update', {
                method: "PUT",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(action.payload.post)
            })
                .then(res => res.json())
                .then(res => {
                })
                .catch(err => {
                    console.error(err)
                })
        },
        deletePost: (state, action) => {
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

export const { createPost, updatePost, deletePost } = postSlice.actions;
export default postSlice.reducer
