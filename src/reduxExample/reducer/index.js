import { combineReducers } from "redux";
import reducer from './reducer'


const reducers = combineReducers(
    {
        counter : reducer
    }
)


export default reducers