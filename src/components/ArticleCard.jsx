import { useState } from 'react';

const PLACEHOLDER = 'https://placehold.co/400x250/e8e8e8/aaa?text=News';

export default function ArticleCard({ article, large = false }) {
  const [imgSrc, setImgSrc] = useState(article.image || PLACEHOLDER);

  return (
    <div className="article-card">
      <img
        src={imgSrc}
        alt={article.title}
        onError={() => setImgSrc(PLACEHOLDER)}
      />
      <div className="article-card-body">
        <h3>{article.title}</h3>
        {article.description && <p>{article.description}</p>}
        {article.url && (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-link"
          >
            Read {large ? 'full ' : ''}→
          </a>
        )}
      </div>
    </div>
  );
}
