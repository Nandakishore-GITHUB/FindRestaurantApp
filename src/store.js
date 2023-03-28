import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// create reducer
const reducers = combineReducers({

})

// create middleware
const middleware = [thunk]

// create store
const store = createStore(reducers,applyMiddleware(...middleware))

export default store