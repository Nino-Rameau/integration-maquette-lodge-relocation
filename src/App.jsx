import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from './assets/page/accueil';
import Relocation from './assets/page/relocation';
import Relocation2 from './assets/page/relocation-2';
import Contact from './assets/page/contact';
import Layout from "./assets/composents/layout";

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/relocation" element={<Relocation />} />
          <Route path="/relocation2" element={<Relocation2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
