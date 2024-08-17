import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

function App(){
    return (
        <div className="app">
            
            <BrowserRouter>
            <Navbar/>
            <Routes>
                
                <Route exact path="/" Component={Home} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/Services" Component={Services} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;