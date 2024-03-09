import { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import "./App.css";
import PageHome from "./pages/pageHome/PageHome";
import PageImage from "./pages/pageImage/PageImage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <main>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="**" element={<PageHome />} />
          <Route path="/image" element={<PageImage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
