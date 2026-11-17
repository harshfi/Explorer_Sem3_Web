import Comp2 from "./Comp2"
export default function Comp1({ count }) {

    return (
        <>
            <h2>Im Comp1</h2>
            <Comp2 count={count} />
        </>
    )
}