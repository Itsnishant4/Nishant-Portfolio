import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta({
    title: 'Page not found — Nishant Patel',
    description: "This page doesn't exist. Back to Nishant Patel's portfolio.",
    path: null,
  });
  return (
    <div className="shell">
      <div className="page-content">
        <section className="section">
          <div className="container">
            <div className="section-title">404</div>
            <p className="hero-bio">Nothing here. Let's get you back.</p>
            <Link className="show-more-link" to="/">← Back to home</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
