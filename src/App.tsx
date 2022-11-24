import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main.page";
import { Footer } from "./components/Footer/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
