import React, { Component } from "react";
import { createStore, combineReducers } from "redux";
import todos from "./reducers/todos";
import filter from "./reducers/filter";
//import {addTodo} from "./actions"

let store = createStore(combineReducers({ todos, filter }));

store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "ADD_TODO", text: "Onion" });
// store.dispatch({ type: "ADD_TODO", text: "Milk" });
// store.dispatch({ type: "ADD_TODO", text: "Cheese" });
// store.dispatch({ type: "TOGGLE_TODO", text: "Milk" });
// store.dispatch({ type: "SET_FILTER", visibility: "Show Completed" });


//store.dispatch(addTodo);
store.dispatch({ type: "ADD_TODO", text: "Milk" });
store.dispatch({ type: "ADD_TODO", text: "Cheese" });
store.dispatch({ type: "TOGGLE_TODO", text: "Milk" });
store.dispatch({ type: "SET_FILTER", visibility: "Show Completed" });
