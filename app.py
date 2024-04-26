from flask import Flask
from api.routes import api
from flask_cors import CORS  # Importa la extensión CORS


app = Flask(__name__)
CORS(app)

# Inicializa la extensión Flask-Admin

# Registra el blueprint de la API
app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True)
