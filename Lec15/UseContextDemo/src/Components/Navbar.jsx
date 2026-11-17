import Comp1 from "./Comp1"
export default function Navbar({ count }) {

    return (
        <>

            <h2>Im navbar</h2>
            <Comp1 count={count} />
        </>
    )
}