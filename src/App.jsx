import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";
import { UserPage } from "./pages/user";
import { _404Page } from "./pages/404";
import { AppLayOut } from "./layout/applayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { Route, Routes } from "react-router-dom";



function App() {


  return (
    <>

      <Routes>

        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedRoute> <AppLayOut /> </ProtectedRoute>}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="*" element={<_404Page />} />

        </Route >

      </Routes >

    </>
  );
}

export default App;
