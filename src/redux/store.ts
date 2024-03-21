import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { uploadReducer } from './uploadFile/reducer'
import { createFolderReducer } from './createFolder/reducer'
import { fetchReducer } from './fetchFiles/reducer'
import { pathUrlReducer } from './pathUrl/reducer'
import { setPathReducer } from './setPath/reducer'
import { updateFilesReducer } from './updateFiles/reducer'



const reducer = combineReducers({
    uploadReducer, createFolderReducer, fetchReducer, pathUrlReducer, setPathReducer, updateFilesReducer
})

export const store = configureStore({
    reducer, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            thunk: true,

        })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch