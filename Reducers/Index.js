import {combineReducers} from "redux";
import UserIdReducer from './UserId';

const rootReducer=combineReducers({

userId:  UserIdReducer

}


)

export default rootReducer;