import Comp3 from "./Comp3"
export default function Comp2({ count }) {

    return (
        <>
            <h2>Im Comp2</h2>
            <Comp3 count={count} />
        </>
    )
}