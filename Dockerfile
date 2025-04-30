# Etapa 2: runtime com Caddy
FROM caddy:alpine

# Copia o Caddyfile de configuração
COPY Caddyfile /etc/caddy/Caddyfile