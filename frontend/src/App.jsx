import { BrowserRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AvailablePRD from "./pages/AvailablePRD"
import BuyerSignup from "./pages/Signup"
import BuyerLogin from "./pages/Login"
import BuyerLandingPage from "./pages/BuyerLandingPage"
import BDashboard from "./pages/BDashboard"
import CropOrderForm from "./pages/CropOrderForm"
import OfficerLanding from "./pages/OfficerLanding"
import BuyerProfile from "./pages/BuyerProfile"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/available-production" element={<AvailablePRD/>}/>
          <Route path="/buyersignup" element={<BuyerSignup/>}/>
          <Route path="/buyerlogin" element={<BuyerLogin/>}/>
          <Route path="/buyerlanding" element={<BuyerLandingPage/>}/>
          <Route path="/bdashboard" element={<BDashboard/>}/>
          <Route path="/order" element={<CropOrderForm/>}/>
          <Route path="/officerlanding" element={<OfficerLanding/>}/>
          <Route path="/buyerprofile" element={<BuyerProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
