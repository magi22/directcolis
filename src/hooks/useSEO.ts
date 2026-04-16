import { useEffect } from 'react';

const BASE_URL = 'https://directcolis.vercel.app';
const DEFAULT_TITLE = 'Direct Colis — Livraison & Suivi de colis au Sénégal';
const DEFAULT_CANONICAL = BASE_URL + '/';

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
}

export function useSEO({
  title,
  description,
  canonical,
}: {
  title: string;
  description?: string;
  canonical: string; // relative path e.g. "/a-propos"
}) {
  useEffect(() => {
    const fullCanonical = BASE_URL + canonical;

    document.title = title;

    const linkEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (linkEl) linkEl.href = fullCanonical;

    setMeta('meta[property="og:url"]', 'content', fullCanonical);
    setMeta('meta[property="og:title"]', 'content', title);

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
      setMeta('meta[name="twitter:description"]', 'content', description);
    }

    setMeta('meta[name="twitter:title"]', 'content', title);

    return () => {
      document.title = DEFAULT_TITLE;
      const linkEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (linkEl) linkEl.href = DEFAULT_CANONICAL;
      setMeta('meta[property="og:url"]', 'content', DEFAULT_CANONICAL);
    };
  }, [title, description, canonical]);
}
