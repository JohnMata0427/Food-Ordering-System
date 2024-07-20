import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from '@pages/auth/Register'
import AuthLayout from '@layouts/AuthLayout';
import NotFound from '@pages/404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="registro" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
