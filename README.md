# Private Stream Dashboard

## Описание
Закрытая веб-страница для трансляции с OBS. Видео поток + динамические счетчики зрителей и просмотров. Доступ только по токену.

## Установка
1. Настроить Nginx с RTMP/HLS модулем (см. `nginx/nginx.conf`).
2. Установить backend:
```bash
cd backend
npm install
node server.js
3.	Запустить OBS → rtmp://<server-ip>/live/mystream
4.	Открыть страницу: frontend/index.html?token=abc123


Функции
	•	Автоматическое обновление зрителей и просмотров
	•	Светлый минималистичный интерфейс
	•	Полностью приватно через токен
