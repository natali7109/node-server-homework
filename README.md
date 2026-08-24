markdown
# Node.js HTTP Server

Простой HTTP-сервер на Node.js для обработки GET-запросов с параметрами.  
Реализован с использованием встроенных модулей `http`, `fs` и `url`.

## 🚀 Установка и запуск

1.Клонирование репозитория

```bash
git clone https://github.com/natali7109/node-server-homework.git
cd node-server-homework

2. Установка зависимостей
bash
npm install
3. Запуск в режиме разработки (с nodemon)
bash
npm run dev
4. Запуск в обычном режиме
bash
npm start
Сервер будет доступен по адресу:
http://127.0.0.1:3003

📁 Структура проекта

node-server-homework/
├── src/
│ ├── data/
│ │ └── users.json # Данные пользователей
│ ├── modules/
│ │ └── users.js # Модуль для работы с users.json
│ └── index.js # Главный файл сервера
├── .gitignore
├── README.md
└── package.json

Запрос-ответ

http://127.0.0.1:3003/	            Hello, World!
http://127.0.0.1:3003/?hello=Alice	Hello, Alice.
http://127.0.0.1:3003/?hello=Ivan	Hello, Ivan.
http://127.0.0.1:3003/?hello=	    Enter a name
http://127.0.0.1:3003/?users	    JSON из users.json
http://127.0.0.1:3003/?foo=bar	    Пустая страница (500)


 Технологии
Node.js — среда выполнения

Модули: http, fs, url

Nodemon — автоматический перезапуск при изменениях

Автор
Natali7109
GitHub: natali7109

📄 Лицензия
Проект выполнен в рамках домашнего задания по Node.js.