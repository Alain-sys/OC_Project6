import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Accommodation from './Pages/Accommodation';
import ErrorPage from './Pages/Error';
import HomePage from './Pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
