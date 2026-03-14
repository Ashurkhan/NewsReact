import { useState } from 'react';

export default function Header({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input.trim());
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <header>
      <div className="header-container">
        <span className="logo">NEWS<span>LETTER</span></span>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search news..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            aria-label="Search news"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </header>
  );
}
