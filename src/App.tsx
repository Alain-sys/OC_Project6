import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import HomePageDetail from './HomePageDetail';
import ErrorPage from './error-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="detail" element={<HomePageDetail />} />
          {/* Child route */}
        </Route>
        <Route path="*" element={<ErrorPage />} /> {/* Handles 404 errors */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
