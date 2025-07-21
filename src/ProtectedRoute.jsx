import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const isLogin = sessionStorage.getItem('isLogin')
    return isLogin ? children : <Navigate to="/" />
}