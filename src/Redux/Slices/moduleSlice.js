import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modules : []
}

const moduleSlice = createSlice({
    name: "module",
    initialState,
    reducers: {
        addModule : (state, action)=>{
            state.modules = [...state.modules, action.payload]
        }
    }
});

export const { addModule } = moduleSlice.actions
export const selectModule = (state)=>state.module.modules
export default moduleSlice.reducer
