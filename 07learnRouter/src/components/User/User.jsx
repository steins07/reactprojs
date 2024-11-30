
import { useParams } from "react-router-dom"
function User() {
    const { userid } = useParams()
    return (
        <>
            <h1
            className="text-center bg-gray-700 text-white text-4xl"
            >Hello User {userid}</h1>
        </>
    )
}

export default User
