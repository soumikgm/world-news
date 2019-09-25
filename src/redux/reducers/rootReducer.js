import {combineReducers} from "redux";
import backend from "./fetchFromBackendReducer";
import {reducer as toastr} from "react-redux-toastr";


export default combineReducers({
    backend,
    toastr,
  }
);
