import {createAction, createSlice} from "@reduxjs/toolkit";

export const setLoginAC = createAction<string>('main-reducer/setLogin')
export const setPasswordAC = createAction<string>('main-reducer/setPassword')

const slice = createSlice({
    name: 'main-reducer',
    initialState: {
        login: '',
        password: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(setLoginAC,(state, action)=>{
            state.login = action.payload
        })
        builder.addCase(setPasswordAC,(state, action)=>{
            state.password = action.payload
        })
    }
})

export const mainReducer = slice.reducer