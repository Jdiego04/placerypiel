import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import PageHome from "./pages/pageHome/PageHome";
import PageImage from "./pages/pageImage/PageImage";
import PageCart from "./pages/pageCart/PageCart";
import PageLogin from "./pages/pageLogin/PageLogin";

function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/image" element={<PageImage />} />
          <Route path="/cart" element={<PageCart />} />
          <Route path="/inicio/:login?" element={<PageLogin />} />
          <Route path="/registro/:reg?" element={<PageLogin />} />
          <Route path="/" element={<PageHome />} />
          <Route path="*" element={<PageHome />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
