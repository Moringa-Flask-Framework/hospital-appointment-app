#!/usr/bin/env python3

from flask import Flask, make_response, request, jsonify
from flask_migrate import Migrate
from flask_restful import Api, Resource
from werkzeug.exceptions import NotFound
import os
# from flask_Bcrypt import Bcrypt

from models import db, User, Appointment, Patient,Staff

app = Flask(__name__)
# bcrypt= Bcrypt(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///hospital.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)
api= Api(app)


class Index(Resource):
    def index(self):
        return "Index for Hospital API"

api.add_resource(Index, '/')


class PatientData(Resource): 
    def get(self):
        all_patients= Patient.query.all()
        patient_dict= [patient.to_dict() for patient in all_patients]
        response= make_response(jsonify(patient_dict), 200)
        return response
   
    def post(self):
        data= request.get_json()
        name= data.get('name')
        age= data.get ('age')
        gender= data.get('gender')
        contact_number= data.get('contact_number')
        email = data.get('email')
        date_of_birth = data.get('date_of_birth')
        try:
            new_patient= Patient(name = name, age = age, gender = gender, contact_number = contact_number, email = email, date_of_birth = date_of_birth)
            db.session.add(new_patient)
            db.session.commit()

            new_patient_dict= new_patient.to_dict()
            response = make_response(jsonify(new_patient_dict), 200)
            return response
        except Exception as e:
            response= make_response({'error': str(e)}, 400)
            return response

api.add_resource(PatientData, '/patients')

class PatientByID(Resource):
    def get(self, id):
        patient = Patient.query.filter_by(id=id).first()
        patient_dict = patient.to_dict()

        response = make_response(
            jsonify(patient_dict),
            200
        )
        return response 
    
    def delete(self,id):
        patient = Patient.query.filter_by(id=id).first()
        db.session.delete(patient)
        db.session.commit()
        response = make_response("Deleted Successfully", 200)
        return response

api.add_resource(PatientByID, '/patients/<int:id>')

# class DeletePatientByID(Resource):
#     def delete_patient_by_id(self):
#         patient = Restaurant.query.filter_by(id=id).first()
#         db.session.delete(patient)
#         db.session.commit()

# api.add_resource(DeleteRestaurantByID, "/patients/<int:id>'", methods=["DELETE"])

# class PizzaData(Resource):
#     def get_pizzas(self):
#         all_pizzas = Pizza.query.all()

#         pizza_dict= [pizza.to_dict() for pizza in all_pizzas]

#         response = make_response(
#             jsonify(pizza_dict),
#             200
#         )
#         return response 

# api.add_resource(PizzaData,'/pizzas')




# class RestaurantPizzas(Resource):
#     def post_patient_pizzas(self):
#         new_patient_pizza = HeroPower(
#                 price=request.form.get("price"),
#                 pizza_id=request.form.get("pizza_id"),
#                 patient_id=request.form.get("patient_id"),
#             )

#         db.session.add(new_patient_pizza)
#         db.session.commit()

#         patient_pizza_dict = new_patient_pizza.to_dict()

#         response = make_response(
#                 jsonify(patient_pizza_dict),
#                 201
#             )

#         return response

# api.add_resource(RestaurantPizzas, "/patient_pizzas", methods=["POST"])



if __name__ == '__main__':
    app.run(port=5555)
