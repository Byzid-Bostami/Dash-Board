import { Routes, Route } from "react-router-dom";

import DashBoard from './pages/DashBoard';
import Sales from './pages/Sales';
import Notification from './pages/Notification';
import Events from './pages/Events';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import ErrorPage from "./pages/ErrorPage";

function App() {
 

  return (
    <div className="flex">
     <Navbar />
     <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/Sales" element={<Sales />} />
      <Route path="/Notification" element={<Notification />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="*" element={<ErrorPage />} />
     </Routes>
        
    </div>
  )
}

export default App
