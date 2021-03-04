import "bootstrap/dist/css/bootstrap.min.css";
import { combineReducers } from "redux";
import articles from "./articles";
import alert from "./alert";

const rootReducer = combineReducers({
 articles,
 alert
});

export default rootReducer;