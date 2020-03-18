import {addMember, addProject} from './Reduceres'
import { combineReducers } from "redux";


export const allReducer = combineReducers({
    addMember, addProject
})