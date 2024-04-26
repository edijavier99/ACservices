from flask import Blueprint,jsonify,request
import mysql.connector
from flask_cors import CORS  # Importa la extensión CORS
from functools import wraps
from api.email import send_request_email

#DECORATOR TO CENTRALICE ALL THE REQUIRED FIELDS FOR EVERY TABLE
def require_fields(*required_fields):
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            data = request.get_json()
            if data is None:
                return jsonify({"msg": "Request should be passed with valid body"}), 400
            missing = [field for field in required_fields if field not in data]
            if missing:
                return jsonify({"msg": f"Missing fields: {', '.join(missing)}"}), 400
            return f(*args, **kwargs)
        return decorated_function
    return decorator

api = Blueprint('api', __name__)
CORS(api)

# db = mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="",
#     database="NGproject"
# )

@api.route('/')
def index():
    return '¡Hola, mundo! Esta es una ruta de prueba.'

@api.route('/send-email', methods=['POST'])  
@require_fields("first_name", "last_name", "email_from", "email_message")
def send_email():
    data = request.get_json()
    email = data["email_from"]
    first_name = data["first_name"]
    last_name = data["last_name"]
    email_message = data["email_message"]
    
    # Llama a la función para enviar el correo electrónico
    try:
        response, status_code = send_request_email(first_name, last_name, email, email_message)
        return response, status_code
    except Exception as e:
        return jsonify({"error": str(e)}), 500

