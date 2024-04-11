import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArsipPage from "./pages/ArsipPage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import Page404 from "./pages/Page404";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<Page404 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArsipPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
