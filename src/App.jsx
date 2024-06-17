import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import dotenv from "dotenv";
dotenv.config();

// PAGES
import Home from "./assets/pages/Home";

//  COMPONENTS
import Header from "./assets/components/Header";

import "./App.css";

const App = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home api_key={api_key} />} />
          <Route path="*" element={<p>Error 404 : Can't find this page. </p>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
