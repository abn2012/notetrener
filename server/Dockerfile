# NoteQuest-lagring: liten Bun-server uten avhengigheter. Trenger DATABASE_URL (postgres://...).
FROM oven/bun:1-alpine
WORKDIR /app
COPY index.js words.js ./
USER bun
EXPOSE 3000
CMD ["bun", "index.js"]
