import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
