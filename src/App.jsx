import { useState, useCallback } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import FeaturedSection from './components/FeaturedSection';
import NewsGrid from './components/NewsGrid';
import Footer from './components/Footer';
import { useNews } from './hooks/useNews';

export default function App() {
  const [category, setCategory] = useState('world');
  const [query, setQuery] = useState('');

  const { articles, loading, error } = useNews(category, query);

  const handleSearch = useCallback((q) => {
    setQuery(q);
    if (q) {
      // При поиске снимаем активную категорию (используем пустую строку)
      setCategory('');
    }
  }, []);

  const handleCategory = useCallback((cat) => {
    setCategory(cat);
    setQuery('');
  }, []);

  return (
    <>
      <Header onSearch={handleSearch} />
      <CategoryNav activeCategory={category} onSelect={handleCategory} />
      <main>
        <FeaturedSection articles={articles} loading={loading} error={error} />
        <NewsGrid
          title="Latest news"
          articles={articles}
          loading={loading}
          sliceStart={3}
          sliceEnd={7}
        />
        <NewsGrid
          title="Trending"
          articles={articles}
          loading={loading}
          sliceStart={7}
          sliceEnd={12}
          gridClass="trending-grid"
        />
      </main>
      <Footer />
    </>
  );
}
