import { useNavigate, useParams } from "react-router-dom"


export default function User() {
    const { id } = useParams()
    return (
        <>
            <h1>Hello, {id}</h1>
        </>
    )
}
