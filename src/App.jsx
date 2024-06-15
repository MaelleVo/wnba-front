import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./assets/pages/Home";

//  COMPONENTS
import Header from "./assets/components/Header";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>Error 404 : Can't find this page. </p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
