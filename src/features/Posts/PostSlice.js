import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = [
    {id: nanoid(), title: 'Post 1', comment: 'My first post'},
    {id: nanoid(), title: 'Post 2', comment: 'My second post'},
    {id: nanoid(), title: 'Post 3', comment: 'My third post'},
    {id: nanoid(), title: 'Post 4', comment: 'My fourth post'},
];
const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {
        Add_post: {
            reducer(state, action){
                state.push(action.payload);
            },
            prepare(title, comment){
                return {
                    payload: {
                        id: nanoid(), title, comment
                    }
                };
            }
        },
        Edit_post(state, action){
            const { id, title, comment } = action.payload;
            const existingPost = state.find(value => value.id === id);
            if (existingPost) {
                existingPost.title = title; existingPost.comment = comment;
            }
        }
    }
});

export default postsSlice.reducer;
export const { Add_post, Edit_post } = postsSlice.actions;
