import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default App;
