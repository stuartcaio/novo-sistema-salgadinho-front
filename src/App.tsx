import { BrowserRouter, Route, Routes } from "react-router-dom"

import Schedule from "./pages/schedule"
import Container from "./layout/container"
import Users from "./pages/users"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Container />}>
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App