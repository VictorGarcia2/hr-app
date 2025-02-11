import { Route, Routes } from "react-router";
import Login from "./components/Login";
import AuthLayout from './components/layouts/AuthLayout'
import Profile from "./components/Profile";
import Accordion from "./components/Accordion";
import { Drawer } from "./components/Drawer";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
        <Route path="/" Component={Drawer}/>
        <Route path="/servicios" Component={Accordion}/>
        <Route path="/profile" Component={Profile}/>
        <Route/>

        </Route>
        <Route path="/login" Component={Login} />
      </Routes >
    </>
  );
}
