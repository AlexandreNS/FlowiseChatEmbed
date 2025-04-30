FROM caddy:alpine

# Diretório de trabalho no container
WORKDIR /app

# Copia os arquivos do projeto
COPY public /app/public
COPY dist/web.js /app/public/web.js
COPY Caddyfile /etc/caddy/Caddyfile

# Exponha a porta definida pela Railway
ENV PORT=8080
EXPOSE 8080

# Inicia o Caddy com o arquivo de configuração
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]