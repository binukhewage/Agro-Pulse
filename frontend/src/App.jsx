import { BrowserRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AvailablePRD from "./pages/AvailablePRD"
import BuyerSignup from "./pages/BuyerSignup"
import BuyerLogin from "./pages/BuyerLogin"
import OfficerLogin from "./pages/OfficerLogin"
import OfficerSignup from "./pages/OfficerSignup"
import BuyerLandingPage from "./pages/BuyerLandingPage"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/available-production" element={<AvailablePRD/>}/>
          <Route path="/buyersignup" element={<BuyerSignup/>}/>
          <Route path="/buyerlogin" element={<BuyerLogin/>}/>
          <Route path="/officerlogin" element={<OfficerLogin/>}/>
          <Route path="/officersignup" element={<OfficerSignup/>}/>
          <Route path="/buyerlanding" element={<BuyerLandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
