import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

def send_request_email(first_name, last_name, email_from, email_message):
    sender_email = os.getenv("GMAIL_MAIL")
    sender_password = os.getenv("GMAIL_PWD")
    recipient_email = "eddy.javiieer@gmail.com"  # Dirección de correo electrónico a la que se enviará el formulario de contacto
    subject = "Nuevo mensaje del formulario de contacto"

    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = recipient_email
    message['Subject'] = subject

    html_content = f"""
    <html>
        <body>
            <h2>Nuevo mensaje del formulario de contacto</h2>
            <p><strong>Nombre:</strong> {first_name} {last_name}</p>
            <p><strong>Correo electrónico:</strong> {email_from}</p>
            <p><strong>Mensaje:</strong></p>
            <p>{email_message}</p>
        </body>
    </html>
    """
    message.attach(MIMEText(html_content, 'html'))
    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = message.as_string()
        server.sendmail(sender_email, recipient_email, text)
        server.quit()
        return json.dumps({"msg": "Correo electrónico enviado exitosamente"}), 200
    except smtplib.SMTPAuthenticationError:
        return json.dumps({"error": "Error de autenticación: Las credenciales de correo electrónico son incorrectas."}), 500
    except smtplib.SMTPException as e:
        return json.dumps({"error": f"Error al enviar el correo electrónico: {str(e)}"}), 500
    except Exception as e:
        return json.dumps({"error": f"Error inesperado: {str(e)}"}), 500
