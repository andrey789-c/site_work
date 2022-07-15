import { combineReducers, createStore } from "redux";
import {AuthReducer} from './AuthReducer'
import {NameReducer} from './NameReducer'
import {executorReducer} from './executor.reducer'
import {JsonReducer} from './JsonSettings'
import {requestReducer} from './request.reducer'

const reducer = combineReducers({AuthReducer, NameReducer, JsonReducer, executorReducer, requestReducer})

export const store = createStore(reducer)