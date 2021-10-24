import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modules : {
        firstLevel : {
            Modules : [],
            secondLevel : {
                SubModules : [],
                thireLevel : {
                    Resources : []
                }
            }
        }
    }
}

const moduleSlice = createSlice({
    name: "module",
    initialState,
    reducers: {
        addModule : (state, action) =>{
            state.modules.firstLevel.Modules = [...state.modules.firstLevel.Modules, action.payload];
        },
        addSubModule : (state, action) =>{
            const submodule = state.modules.firstLevel.secondLevel.SubModules;
            submodule = [...submodule, action.payload];
        },
        addResources : (state, action) =>{
            const resources = state.modules.firstLevel.secondLevel.thirdLevel.Resources;
            resources = [...resources, action.payload];
        }
    }
});

export const { addModule } = moduleSlice.actions
export const selectModule = (state)=>state.module.modules.firstLevel.Modules;
export const selectSubModule = (state)=>state.module.modules.firstLevel.secondLevel.SubModules;
export const selectResources = (state)=>state.module.modules.firstLevel.secondLevel.thirdLevel.Resources;
export default moduleSlice.reducer;
