import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import PageHome from "./pages/pageHome/PageHome";
import PageImage from "./pages/pageImage/PageImage";
import PageCart from "./pages/pageCart/PageCart";

function App() {

  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="**" element={<PageHome />} />
          <Route path="/image" element={<PageImage />} />
          <Route path="/cart" element={<PageCart />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
