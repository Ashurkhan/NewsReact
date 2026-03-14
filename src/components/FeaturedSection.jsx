import { useState } from 'react';

const PLACEHOLDER_BIG = 'https://placehold.co/800x450/e8e8e8/aaa?text=News';
const PLACEHOLDER = 'https://placehold.co/400x250/e8e8e8/aaa?text=News';

function MainArticle({ article }) {
  const [imgSrc, setImgSrc] = useState(article.image || PLACEHOLDER_BIG);
  return (
    <div className="main-article">
      <img src={imgSrc} alt={article.title} onError={() => setImgSrc(PLACEHOLDER_BIG)} />
      <div className="main-article-body">
        <h2>{article.title}</h2>
        <p>{article.description || ''}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-link">
          Read full →
        </a>
      </div>
    </div>
  );
}

function SideArticle({ article }) {
  const [imgSrc, setImgSrc] = useState(article.image || PLACEHOLDER);
  return (
    <div className="article-card">
      <img src={imgSrc} alt={article.title} onError={() => setImgSrc(PLACEHOLDER)} />
      <div className="article-card-body">
        <h3>{article.title}</h3>
        <p>{article.description || ''}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-link">Read →</a>
      </div>
    </div>
  );
}

function FeaturedSkeleton() {
  return (
    <div className="featured">
      <div className="skeleton-card">
        <div className="skeleton-img" style={{ height: 320 }} />
        <div className="skeleton-card-body">
          <div className="skeleton-line" />
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>
      </div>
      <div className="sidebar">
        {[0, 1].map(i => (
          <div className="skeleton-card" key={i}>
            <div className="skeleton-img" />
            <div className="skeleton-card-body">
              <div className="skeleton-line" />
              <div className="skeleton-line short" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturedSection({ articles, loading, error }) {
  if (loading) return <FeaturedSkeleton />;
  if (error || articles.length === 0) {
    return <p className="error-msg">{error || 'No news found. Try another request.'}</p>;
  }

  return (
    <div className="featured">
      <MainArticle article={articles[0]} />
      <aside className="sidebar">
        {articles.slice(1, 3).map((a) => (
          <SideArticle key={a.id || a.url} article={a} />
        ))}
      </aside>
    </div>
  );
}
