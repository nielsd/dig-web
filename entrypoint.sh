#!/bin/bash
set -e

echo ">>> Starting local BIND (recursive, no cache)..."
named -u bind -c /etc/bind/named.conf &

# Warten bis Port 53 offen ist
for i in {1..10}; do
    if ss -lntu | grep -q ":53 "; then
        break
    fi
    sleep 0.5
done

echo ">>> BIND is ready"
echo ">>> Starting dig-web as digweb user..."

# Web-App als digweb starten
exec su -s /bin/bash digweb -c \
    "/app/venv/bin/gunicorn --bind 0.0.0.0:5000 --workers 2 --access-logfile - --error-logfile - app:app"
