import Home from "./components/Home";
import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import Services from "./Services";
import Innovations from "./Innovations";
import Education from "./Education";
import Login from "./Login";


function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" component={Home} />
        {/* <Route path="/services" component={Services} />
        <Route path="/innovations" component={Innovations} />
        <Route path="/education" component={Education} /> */} 




      </Routes>



    </>
  );
}

export default App;
