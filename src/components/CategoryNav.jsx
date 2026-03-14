import { useState } from 'react';

const CATEGORIES = [
  { label: 'World',         value: 'world' },
  { label: 'Politics',      value: 'politics' },
  { label: 'Economy',       value: 'business' },
  { label: 'Science & Tech',value: 'technology' },
  { label: 'Business',      value: 'business' },
  { label: 'Lifestyle',     value: 'entertainment' },
  { label: 'Food',          value: 'health' },
  { label: 'Sports',        value: 'sports' },
  { label: 'Climate',       value: 'science' },
];

export default function CategoryNav({ onSelect }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleClick = (idx) => {
    setActiveIdx(idx);
    onSelect(CATEGORIES[idx].value);
  };

  return (
    <nav aria-label="News categories">
      <div className="nav-inner">
        <ul>
          {CATEGORIES.map((cat, idx) => (
            <li
              key={idx}
              className={activeIdx === idx ? 'active' : ''}
              onClick={() => handleClick(idx)}
            >
              {cat.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
