FROM debian:bookworm-slim

LABEL maintainer="nielsd / dig-web"
LABEL description="dig-web + local non-caching recursive BIND"

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    FLASK_APP=dig.py

# Pakete
RUN apt-get update && apt-get install -y --no-install-recommends \
        python3 \
        python3-pip \
        python3-venv \
        bind9 \
        bind9-dnsutils \
        dnsutils \
        whois \
        ca-certificates \
        curl \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Projekt kopieren
COPY . .

# Virtualenv + Flask
RUN python3 -m venv /app/venv \
    && /app/venv/bin/pip install --no-cache-dir --upgrade pip \
    && /app/venv/bin/pip install --no-cache-dir Flask gunicorn

# BIND Verzeichnisse vorbereiten
RUN mkdir -p /var/cache/bind /var/log/named /run/named \
    && chown -R bind:bind /var/cache/bind /var/log/named /run/named \
    && chmod 775 /var/cache/bind /var/log/named /run/named

# Deine named.conf übernehmen
COPY named.conf /etc/bind/named.conf
RUN chown bind:bind /etc/bind/named.conf

# resolv.conf im Container auf den lokalen BIND zeigen
RUN echo "nameserver 127.0.0.1" > /etc/resolv.conf \
    && echo "nameserver ::1" >> /etc/resolv.conf

# Entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Non-root User für die Web-App (BIND läuft als User "bind")
RUN useradd --system --uid 1000 --home /app digweb \
    && chown -R digweb:digweb /app

EXPOSE 5000/tcp
# Port 53 nur intern (nicht nach außen mappen!)

ENTRYPOINT ["/entrypoint.sh"]
