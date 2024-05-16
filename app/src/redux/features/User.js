import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: { value: null },
    reducers: {
        addUser: (state, action) => {
            state.value = action.payload
        },

        updateUser: (state, action) => {
            if (state.value) {
                state.value[action.payload.field] = action.payload.value;
            }
        },

        deleteUser: (state) => {
            state.value = null
        }
    }
})

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer