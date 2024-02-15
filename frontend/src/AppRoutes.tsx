import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>}></Route>
      <Route path="/user-profile" element={<span>User Profile</span>}></Route>
      <Route path="*" element={<Navigate to={"/"} />}></Route>
    </Routes>
  )
}

export default AppRoutes