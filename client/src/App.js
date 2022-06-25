import './App.css'
import Footers from './components/footer/Footer'
import Layout from './components/layout/Layout'
import Main from './components/main/Main'
import Home from './pages/Home'

function App() {
  return (
    <>
    <Layout>
      <Home />
      <Main  />
    </Layout>




   <Footers  /> 

   </>

  )
}

export default App
