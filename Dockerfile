# NoteQuest som Docker-image: nginx som serverer de statiske filene og sender /api/ til lagringsserveren.
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html styles.css app.js manifest.webmanifest icon-*.png /usr/share/nginx/html/
COPY fonts/ /usr/share/nginx/html/fonts/
