FROM caddy:alpine

WORKDIR /app

COPY public /app/public
COPY dist/web.js /app/public/web.js
COPY Caddyfile /etc/caddy/Caddyfile

ENV PORT=8080
EXPOSE 8080

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]