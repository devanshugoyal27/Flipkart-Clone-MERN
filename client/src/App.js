import "./App.css";
import DetailsView from "./components/details/DetailsView";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from "./components/cart/Cart";

function App() {
  return (
    <DataProvider>
       <BrowserRouter>
      
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<DetailsView/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
       
      </div>
      </BrowserRouter>
    </DataProvider> 
  );
}

export default App;
