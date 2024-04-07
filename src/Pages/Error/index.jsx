import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main id="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error-page__link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default ErrorPage;
