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
