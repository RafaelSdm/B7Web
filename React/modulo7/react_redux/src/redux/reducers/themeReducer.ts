import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'theme',
    initialState:{
        status: 'ligth'
    },
    reducers:{
        setThemeStatus: (state, action) =>{

            state.status = action.payload

        }
    }
})

export const {setThemeStatus} = slice.actions
export default slice.reducer