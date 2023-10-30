from flask import Blueprint, flash,request,jsonify
from flask_login import login_required, current_user
from datetime import date
from ..models.db import db
from ..models.events import Event
from ..forms.event_form import EventForm

event_routes = Blueprint('events', __name__)


@event_routes.route("/")
def all_events():
    events = Event.query.all()
    event_list = [one_event.to_dict() for one_event in events]
    # print(event_list)
    # res = {}
    # for one_event in event_list:
    #     one_event_id = one_event['id']
    #     res[one_event_id] = one_event

    return event_list

@event_routes.route("/", methods=["POST"])
@login_required
def create_event():
    form = EventForm()
    form['csrf_token'].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_event = Event(
            title = form.data['title'],
            details = form.data['details'],
            start_date = form.data['start_date'],
            end_date = form.data['end_date'],
            start_time = form.data['start_time'],
            end_time = form.data['end_time'],
            color = form.data['color'],
            created_at = date.today()
        )

        db.session.add(new_event)
        db.session.commit()

        return{'event': new_event.to_dict()}
