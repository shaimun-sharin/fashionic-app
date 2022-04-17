import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
