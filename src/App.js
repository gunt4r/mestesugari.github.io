import HomePage  from '../src/pages/Home/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Istoria from "../src/pages/IstoriaPage/ContentIstoriaPage/Istoria"
import Categorii from "../src/pages/CategoriiPage/contentCategoriiPage/Categorii"
import Evenimente from "../src/pages/EvenimentePage/EvenimenteContentPage/Evenimente"
import Contact from "../src/pages/ContactPage/Contact/Contact"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="Istoria" element={<Istoria />} />
          <Route path="Categorii" element={<Categorii />} />
          <Route path="Evenimente" element={<Evenimente />} />
          <Route path="Contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
