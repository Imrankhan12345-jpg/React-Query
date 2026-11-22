import { Outlet } from "react-router"

const ProtectedRouting = ({ allowedRole }) => {
    // Yahan aapauthentication check kar sakte hain, 
    // abhi ke liye outlet return karte hain
    return <Outlet />
}

export default ProtectedRouting