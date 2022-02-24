import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {id: nanoid(), name: 'Leanne Graham', website: 'Sincere@april.biz'},
    {id: nanoid(), name: 'Ervin Howel', website: 'anastasia.net'},
    {id: nanoid(), name: 'Clementine Bauch', website: 'ramiro.info'},
    {id: nanoid(), name: 'Romaguera-Jacobson', website: 'kale.biz'},
    {id: nanoid(), name: 'Patricia Lebsack', website: 'ola.org'},
];
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export default userSlice.actions;
