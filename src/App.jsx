
import Details from './pages/details'
import Home from './pages/home'
import Sub_Details from './pages/sub_details';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:ingredient" element={<Details />} />
        <Route path="/details/:ingredient/:idmeal" element={<Sub_Details />} />
      </Routes>
    </BrowserRouter>
  )
}

