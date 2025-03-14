"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from api.utils import APIException, generate_sitemap
from api.models import db
from api.routes import api
from api.admin import setup_admin
from api.commands import setup_commands
from dotenv import load_dotenv
from flask_mail import Mail, Message
from flask_cors import CORS


# Crear instancia de Flask
app = Flask(__name__)
CORS(app, origins="http://localhost:3000")
app.url_map.strict_slashes = False

# Configuración de Flask-Mail
app.config["MAIL_SERVER"] = "smtp.gmail.com"  # Servidor SMTP (puede ser otro)
app.config["MAIL_PORT"] = 587  # Puerto de salida
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USE_SSL"] = False
app.config["MAIL_USERNAME"] = os.getenv("MAIL_USERNAME")  # Email del servidor
app.config["MAIL_PASSWORD"] = os.getenv("MAIL_PASSWORD")  # Contraseña o App Password
app.config["MAIL_DEFAULT_SENDER"] = os.getenv("MAIL_USERNAME")  # Mismo email del servidor

# Inicializar Flask-Mail después de definir `app`
mail = Mail(app)




# from models import Person

load_dotenv()
ENV = "development" if os.getenv("FLASK_DEBUG") == "1" else "production"
static_file_dir = os.path.join(os.path.dirname(
    os.path.realpath(__file__)), '../public/')

app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace(
        "postgres://", "postgresql://")
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints


@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response

# Endpoint para enviar correos
@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "Todos los campos son obligatorios"}), 400

    try:
        msg = Message(
            subject=f"Nuevo mensaje de {name}",
            sender=email,
            recipients=[os.getenv("MAIL_USERNAME")],
            body=f"Nombre: {name}\nEmail: {email}\nMensaje: {message}",
        )
        mail.send(msg)
        return jsonify({"success": "Correo enviado con éxito"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)





