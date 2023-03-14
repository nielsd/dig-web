from flask import Flask

app = Flask(__name__, static_url_path='')

from app import routes

from werkzeug.middleware.proxy_fix import ProxyFix
app.wsgi_app = ProxyFix(app.wsgi_app)
