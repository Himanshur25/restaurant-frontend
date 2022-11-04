import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu"
 import  {Login } from "./login";
 import { Register } from "./register";
 import './App.css';
import Checkout from "./components/checkout";
import Payment from "./components/payment";

 function App() {
  return (
    <>
    <div className="background">
    <BrowserRouter>          
          <div className="container"></div>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/Home" element={<Menu/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path="/payment" element={<Payment/>}/>
            
            </Routes>
          
        </BrowserRouter>
        
        </div>

    </>
  );
}

export default App;