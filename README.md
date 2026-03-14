# NewsLetter (React + Vite) 🚀

Современный новостной агрегатор, переписанный на **React 18** с использованием **Vite**. Приложение получает актуальные новости через **Currents API** и поддерживает фильтрацию по категориям и поиск.

## 🔗 Живая демо-версия
**[https://ashurkhan.github.io/NewsReact/](https://ashurkhan.github.io/NewsReact/)**

---

## ✨ Особенности
- **React Components**: Модульная архитектура (Header, CategoryNav, NewsGrid и др.).
- **Custom Hooks**: Логика получения новостей инкапсулирована в `useNews`.
- **Skeleton Loading**: Красивые Shimmer-эффекты во время загрузки данных.
- **Error Handling**: Обработка ошибок сети и отсутствие результатов поиска.
- **Fallback Images**: Автоматическая подстановка заглушек для новостей без изображений.
- **CI/CD**: Автоматический деплой на GitHub Pages через GitHub Actions.

---

## 🛠 Технологии
- **React 18**
- **Vite** (сборка)
- **Vanilla CSS** (модернизированный дизайн)
- **Currents API** (источник новостей)
- **GitHub Actions** (автоматизация деплоя)

---

## 🚀 Запуск локально

1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/Ashurkhan/NewsReact.git
   cd NewsReact
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите dev-сервер:
   ```bash
   npm run dev
   ```

---

## 🔑 API Ключ
Для работы приложения используется API ключ от [Currents API](https://currentsapi.services/). Вы можете получить свой ключ бесплатно и заменить его в файле `src/hooks/useNews.js`.

---

## 📝 Лицензия
MIT License.
