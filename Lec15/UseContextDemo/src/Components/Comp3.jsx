import { useContext } from "react"
import { counterContext } from "../context/context"

export default function Comp3({ count }) {

    const counter = useContext(counterContext)

    return (
        <>
            <h2 onClick={() => counter.setCount(counter.count + 1)}>Im Comp3 - {counter.count}</h2>
        </>
    )
}