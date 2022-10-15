import {createAction, createSlice} from "@reduxjs/toolkit";

const setLogin = createAction<string>('main-reducer/setLogin')
const setPassword = createAction<string>('main-reducer/setPassword')

const slice = createSlice({
    name: 'main-reducer',
    initialState: {
        login: '',
        password: ''
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(setLogin,(state, action)=>{
            state.login = action.payload
        })
        builder.addCase(setPassword,(state, action)=>{
            state.password = action.payload
        })
    }
})

export const mainReducer = slice.reducer