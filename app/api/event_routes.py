from flask import Blueprint, flash,request
from flask_login import login_required, current_user
from datetime import date
from ..models.db import db
from ..models.events import Event

event_routes = Blueprint('events', __name__)


@event_routes.route("/")
def all_events():
    events = Event.query.all()
    event_list = [one_event.to_dict() for one_event in events]
    # res = {}
    # for one_event in event_list:
    #     one_event_id = one_event['id']
    #     res[one_event_id] = one_event

    return event_list
