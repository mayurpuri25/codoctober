import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user : null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser : (state, action)=>{
            state.user = action.payload
        },
        logout : (state)=>{
            state.user = null;
            localStorage.clear();
        }
    }
});

export const { setUser, logout } = userSlice.actions;
export const selectUser = (state)=>state.user.user;
export default userSlice.reducer;
