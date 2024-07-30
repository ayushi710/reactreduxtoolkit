import { createSlice } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";

const adminSlice = createSlice({
    name: "admin",
    initialState: [],
    reducers: {
        addAdminUser(state, action) {
            console.log("rdt", action.payload)
            state.push(action.payload)
        },
        removeAdminUser(state, action) {
            state.splice(action.payload, 1)
        },
        
    },
    extraReducers(builder){
        builder.addCase(userSlice.actions.deleteUsers, (state, action) => {
            return []
        })
    }
})

export default adminSlice.reducer;
export const {addAdminUser, removeAdminUser} = userSlice.actions