import { useEffect } from 'react';

/* Update title + meta tags per route (SPA has a single index.html) */
export default function usePageMeta({ title, description, path }) {
  useEffect(() => {
    const SITE = 'https://nishantpatel.me';
    document.title = title;
    const setMeta = (sel, val) => {
      const el = document.head.querySelector(sel);
      if (el) el.setAttribute('content', val);
    };
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    if (path) {
      const canon = document.head.querySelector('link[rel="canonical"]');
      if (canon) canon.setAttribute('href', `${SITE}${path}`);
      setMeta('meta[property="og:url"]', `${SITE}${path}`);
    }
  }, [title, description, path]);
}
