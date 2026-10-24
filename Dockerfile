# NoteQuest som Docker-image: nginx som serverer de statiske filene.
FROM nginx:stable-alpine
COPY index.html styles.css app.js manifest.webmanifest icon-*.png /usr/share/nginx/html/
COPY fonts/ /usr/share/nginx/html/fonts/
