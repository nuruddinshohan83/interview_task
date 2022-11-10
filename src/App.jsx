import { useEffect, useState } from "react"
import "./App.css"
import { Provider, useDispatch, useSelector } from "react-redux"

function App() {
    const [data, setData] = useState("")
    useEffect(() => {
        console.log(data)
    }, [data])
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
    function handleSubmit(event) {
        event.preventDefault()
        dispatch({
            type: "add_product",
            payload: data,
        })
    }
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                ></input>
                <button type="submit">Add</button>
            </form>

            {products
                ? products.map((value, i) => <li key={i}>{value}</li>)
                : null}
        </div>
    )
}

export default App
