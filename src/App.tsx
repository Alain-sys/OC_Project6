import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <Route path="/" element={<HomePage />}></Route>
        <Route path="*" element={<ErrorPage />} /> {/* Handles 404 errors */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
