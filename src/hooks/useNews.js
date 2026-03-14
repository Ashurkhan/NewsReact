import { useState, useEffect, useCallback } from 'react';

const API_KEY = 'sCKAOTliMMKDDVnkfhVGA-hfxb_ebYhEQ5r5qyw3ZH_hlBNK';
const BASE_URL = 'https://api.currentsapi.services/v1/';

export function useNews(category, query) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);

    let url = `${BASE_URL}latest-news?apiKey=${API_KEY}&language=en&limit=15`;
    if (query) {
      url = `${BASE_URL}search?apiKey=${API_KEY}&keywords=${encodeURIComponent(query)}&language=en&limit=15`;
    } else {
      url += `&category=${category}`;
    }

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Error fetching news');
      const data = await res.json();
      setArticles(data.news || []);
    } catch (err) {
      setError(err.message);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [category, query]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return { articles, loading, error };
}
