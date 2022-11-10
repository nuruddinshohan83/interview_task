import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { createStore } from "redux"
import { Provider, useDispatch, useSelector } from "react-redux"
import shopReducer from "./reducer/shopReducer"
//import { Dispatch } from "redux"
const store = createStore(
    shopReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
