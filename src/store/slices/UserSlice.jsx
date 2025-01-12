import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser(state, action) {
            console.log("rdt", action.payload)
            state.push(action.payload)
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        deleteUsers(state, action) {
            return []
        }
    }
})

export default userSlice.reducer;
export const {addUser, removeUser, deleteUsers} = userSlice.actions