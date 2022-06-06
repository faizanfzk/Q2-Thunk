import Redux, { applyMiddleware, combineReducers } from "redux"
import { createStore } from "redux"
import App from "../App"
import { appReducer } from "./app/reducer"
import { authReducer } from "./auth/reducer"


const rootReducer=combineReducers({
    auth:authReducer,
    app:appReducer
})

export const Store=createStore(rootReducer)