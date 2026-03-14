import ArticleCard from './ArticleCard';

function GridSkeleton({ count = 4 }) {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div className="skeleton-card" key={i}>
          <div className="skeleton-img" />
          <div className="skeleton-card-body">
            <div className="skeleton-line" />
            <div className="skeleton-line" />
            <div className="skeleton-line short" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function NewsGrid({ title, articles, loading, sliceStart, sliceEnd, gridClass = 'news-grid' }) {
  return (
    <section className={title === 'Latest news' ? 'latest-news' : 'trending'}>
      <h2 className="section-title">{title}</h2>
      {loading ? (
        <GridSkeleton count={sliceEnd - sliceStart} />
      ) : articles.length === 0 ? (
        <p className="error-msg">No news found.</p>
      ) : (
        <div className={gridClass}>
          {articles.slice(sliceStart, sliceEnd).map((a) => (
            <ArticleCard key={a.id || a.url} article={a} />
          ))}
        </div>
      )}
    </section>
  );
}
