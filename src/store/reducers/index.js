import "bootstrap/dist/css/bootstrap.min.css";
import { combineReducers } from "redux";
import articles from "./articles";
import stories from "./stories"
import alert from "./alert";

const rootReducer = combineReducers({
 stories,
 articles,
 alert
});

export default rootReducer;