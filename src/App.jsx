import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '@pages/auth/Register'
import AuthLayout from '@layouts/AuthLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
