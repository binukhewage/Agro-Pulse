import { BrowserRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AvailableD from "./pages/AvailableD"
import BuyerSignup from "./pages/Signup"
import BuyerLogin from "./pages/Login"
import BuyerLandingPage from "./pages/BuyerLanding"
import BDashboard from "./pages/BDashboard"
import CropOrderForm from "./pages/CropOrderForm"
import OfficerLanding from "./pages/OfficerLanding"
import BuyerProfile from "./pages/BuyerProfile"
import ODashboard from "./pages/ODashboard"
import Waste from "./pages/Waste"
import AvailablePRD from "./pages/AvailablePRD"
import FuturePRD from "./pages/FuturePRD"
import OfficerProfile from "./pages/OfficerProfile"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/available-dashboard" element={<AvailableD/>}/>
          <Route path="/buyersignup" element={<BuyerSignup/>}/>
          <Route path="/buyerlogin" element={<BuyerLogin/>}/>
          <Route path="/buyerlanding" element={<BuyerLandingPage/>}/>
          <Route path="/bdashboard" element={<BDashboard/>}/>
          <Route path="/order" element={<CropOrderForm/>}/>
          <Route path="/officerlanding" element={<OfficerLanding/>}/>
          <Route path="/buyerprofile" element={<BuyerProfile/>}/>
          <Route path="/odashboard" element={<ODashboard/>}/>
          <Route path="/waste" element={<Waste/>}/>
          <Route path="/available-production" element={<AvailablePRD/>}/>
          <Route path="/future-production" element={<FuturePRD/>}/>
          <Route path="/officerprofile" element={<OfficerProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
