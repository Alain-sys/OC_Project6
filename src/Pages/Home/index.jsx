import { Link, Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <nav>
        <Link to="detail">Go to Detail Page</Link>
      </nav>
      <Outlet /> {/* This is where child routes will be rendered */}
    </div>
  );
}

export default HomePage;
