import { Drawer } from "./components/Drawer";
import { Route, Routes } from "react-router";
import AuthLayout from './components/layouts/AuthLayout'
import { Profiler } from "react";
import  Profile from "./pages/Profile"
import Accordion from "./pages/Accordion"
import {Estudiantes} from "./pages/Estudiantes"
import Login from "./pages/Login"
import ServiciosDeEstudiantes from "./pages/Servicios-de-estudiantes";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
        <Route path="/" Component={Profile}/>
        <Route path="/servicios" Component={Accordion}/>
        <Route path="/profile" Component={Profile}/>
        <Route path="/estudiantes" Component={Estudiantes}/>
        <Route path="/serviciosDeEstudiantes" Component={ServiciosDeEstudiantes} />
        <Route/>
        </Route>
        <Route path="/login" Component={Login} />
      </Routes >
    </>
  )}