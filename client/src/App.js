import './App.css'
import Footers from './components/layout/Footer'
import Layout from './components/layout/Layout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ErrorPage from "./pages/ErrorPage"
import Logout from './components/auth_Login_Form/pages_Login/Logout'
import Register from './components/auth_Login_Form/pages_Login/Register'
import Login from './components/auth_Login_Form/pages_Login/Login'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>


        {/* <Footers  />  */}

      </Layout>
    </Router>
  )
}

export default App
