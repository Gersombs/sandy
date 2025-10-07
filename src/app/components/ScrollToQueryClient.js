"use client";
import { useEffect } from 'react';

export default function ScrollToQueryClient() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const scrollTo = params.get('scrollTo');
      if (scrollTo) {
        // wait a tick for content to be present
        setTimeout(() => {
          const el = document.getElementById(scrollTo);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
          // remove the query param without reloading
          const url = new URL(window.location.href);
          url.searchParams.delete('scrollTo');
          window.history.replaceState({}, '', url.toString());
        }, 50);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
