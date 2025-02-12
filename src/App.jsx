import { Drawer } from "./components/Drawer";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import AuthLayout from './components/layouts/AuthLayout'
import Profile from "./pages/Profile";
import Accordion from "./pages/Accordion";
import { Estudiantes } from "./pages/Estudiantes";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
        <Route path="/" Component={Profile}/>
        <Route path="/servicios" Component={Accordion}/>
        <Route path="/profile" Component={Profile}/>
        <Route path="/estudiantes" Component={Estudiantes}/>
        <Route/>
        </Route>
        <Route path="/login" Component={Login} />
      </Routes >
    </>
  )}