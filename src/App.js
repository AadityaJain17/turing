import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Pr } from "./components/Pages/Pr";
import { Contact } from "./components/Pages/Contact";
import { Articles } from "./components/Pages/Articles";
import { Events } from "./components/Pages/Events";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pr" element={<Pr />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
