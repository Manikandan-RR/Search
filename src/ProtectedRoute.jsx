import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const isLogin = sessionStorage.getItem('isLogin')
    return isLogin ? children : <Navigate to="/" />
}

// export const ProtectedRoute = (props) => {
//     const isLogin = sessionStorage.getItem('isLogin')
//     if (isLogin) {
//         return props.children
//     }
//     else {
//         return <Navigate to='/' />
//     }
// }