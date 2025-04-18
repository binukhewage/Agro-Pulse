import { BrowserRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AvailablePRD from "./pages/AvailablePRD"
import BuyerSignup from "./pages/BuyerSignup"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/available-production" element={<AvailablePRD/>}/>
          <Route path="/buyersignup" element={<BuyerSignup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
