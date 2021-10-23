import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modules : []
}

const moduleSlice = createSlice({
    name: "module",
    initialState,
    reducers: {
        addModule : (state, action)=>{
            return [...state.modules, action.payload]
        }
    }
});

export const { addModule } = moduleSlice.actions
export default moduleSlice.reducer
