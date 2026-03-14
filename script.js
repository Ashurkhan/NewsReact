const API_KEY = 'sCKAOTliMMKDDVnkfhVGA-hfxb_ebYhEQ5r5qyw3ZH_hlBNK'; // Замени на свой ключ из https://currentsapi.services/
const BASE_URL = 'https://api.currentsapi.services/v1/';

const categories = document.getElementById('categories');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

const mainArticle = document.getElementById('main-article');
const sidebar = document.getElementById('sidebar');
const latestNews = document.getElementById('latest-news');
const trending = document.getElementById('trending');

let currentCategory = 'world'; // текущая категория
let currentQuery = ''; // текущий поисковый запрос

async function fetchNews(category = 'world', query = '', limit = 15) {
    let url = `${BASE_URL}latest-news?apiKey=${API_KEY}&language=en&limit=${limit}`;
    if (query) {
        url = `${BASE_URL}search?apiKey=${API_KEY}&keywords=${encodeURIComponent(query)}&language=en&limit=${limit}`;
    } else {
        url += `&category=${category}`;
    }

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Error fetching news');
        const data = await res.json();
        return data.news || [];
    } catch (err) {
        console.error(err);
        return [];
    }
}

function renderArticles(articles) {
    if (articles.length === 0) {
        const error = '<p style="text-align:center;color:#c00;">News are not found Please try another request</p>';
        mainArticle.innerHTML = error;
        sidebar.innerHTML = error;
        latestNews.innerHTML = error;
        trending.innerHTML = error;
        return;
    }

    // Главная
    const main = articles[0];
    mainArticle.innerHTML = `
        <img src="${main.image || 'https://via.placeholder.com/800x450?text=News'}" alt="${main.title}">
        <h2>${main.title}</h2>
        <p>${main.description || 'Описание отсутствует'}</p>
        <a href="${main.url}" target="_blank" style="color:#c00;">Read full →</a>
    `;

    // Сайдбар
    sidebar.innerHTML = articles.slice(1, 3).map(a => `
        <div class="article">
            <img src="${a.image || 'https://via.placeholder.com/400x250?text=News'}" alt="${a.title}">
            <h3>${a.title}</h3>
            <p>${a.description || ''}</p>
            <a href="${a.url}" target="_blank" style="color:#c00;">Read →</a>
        </div>
    `).join('');

    // Последние новости
    latestNews.innerHTML = articles.slice(3, 7).map(a => `
        <div class="article">
            <img src="${a.image || 'https://via.placeholder.com/400x250?text=News'}" alt="${a.title}">
            <h3>${a.title}</h3>
            <p>${a.description || ''}</p>
            <a href="${a.url}" target="_blank" style="color:#c00;">Read →</a>
        </div>
    `).join('');

    // Трендовые
    trending.innerHTML = articles.slice(7, 12).map(a => `
        <div class="article">
            <img src="${a.image || 'https://via.placeholder.com/400x250?text=News'}" alt="${a.title}">
            <h3>${a.title}</h3>
            <p>${a.description || ''}</p>
        </div>
    `).join('');
}

async function loadContent() {
    const articles = await fetchNews(currentCategory, currentQuery);
    renderArticles(articles);
}

// Переключение категорий
categories.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        document.querySelectorAll('#categories li').forEach(li => li.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.dataset.category;
        currentQuery = ''; // сбрасываем поиск
        searchInput.value = '';
        loadContent();
    }
});

// Поиск
function doSearch() {
    const query = searchInput.value.trim();
    if (query) {
        currentQuery = query;
        // Снимаем активную категорию при поиске
        document.querySelectorAll('#categories li').forEach(li => li.classList.remove('active'));
        loadContent();
    } else {
        // Если поиск пустой — возвращаемся к текущей категории
        currentQuery = '';
        loadContent();
    }
}

searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') doSearch();
});

// Первая загрузка
loadContent();