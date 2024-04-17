import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Navbar} from "./components/Navbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Donar } from "./pages/Donar";
import { Blood } from "./pages/Blood";
import { Admin } from "./pages/Admin";


const App = () => {

  return (
    <>

    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/donate" element= { <Donar />} /> 
      <Route path="/blood" element = { <Blood />} />
      <Route path="/login" element = { <Admin /> } />
    </Routes>
    <Footer />
    </BrowserRouter>
     
    </>
  );
};

export default App
