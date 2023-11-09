
# Download the helper library from https://www.twilio.com/docs/python/install
from flask import Blueprint, flash, request, jsonify
from flask_login import login_required, current_user
from datetime import date
from ..models.db import db

import os
from twilio.rest import Client

twilio_routes = Blueprint('twilio', __name__)
# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
twilio_number = os.environ['TWILIO_PHONE_NUMBER']
client = Client(account_sid, auth_token)


@twilio_routes.route("", methods=['POST'])
def send_sms():
    try:
        data = request.get_json()  # Parse JSON data sent from the front-end
        if 'message' in data and 'user' in data:
            user = data['user']
            orderMessage = data['message']
            user_phone_number = "+1" + user['phone_number']
            message = client.messages.create(
                body=orderMessage,
                from_=twilio_number,
                to='+13525595415'
            )
            message = client.messages.create(
                body=orderMessage,
                from_=twilio_number,
                to=user_phone_number
            )

            return jsonify({"message": "SMS sent successfully"})
        else:
            return jsonify({"error": "Invalid request format"})

    except Exception as e:
        return jsonify({"error": str(e)})
