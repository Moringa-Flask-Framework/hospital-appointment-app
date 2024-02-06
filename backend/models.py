from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
import re
from sqlalchemy.ext.hybrid import hybrid_property
# from app import bcrypt

db = SQLAlchemy()

class Patient(db.Model, SerializerMixin):
    __tablename__ = 'patients'

    serialize_rules = ('-appointments.patient',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    date_of_birth = db.Column(db.String, nullable=False)
    age= db.Column(db.Integer,nullable=False)
    gender = db.Column(db.String, nullable=False)
    contact_number = db.Column(db.String, nullable=False)
    email =  db.Column(db.String, unique=True)
    created_at= db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now())

    appointments= db.relationship('Appointment', backref= 'patient')

    @validates('email')
    def validate_fields(self, key, value):
        if not re.match("[^@]+@[^@]+\.[^@]+", value):
            raise ValueError("Failed email validation")
        return value
    
    @validates('age')
    def validate_age(self, key, age):
        if  age < 0:
            raise ValueError("Age cannot be negative")
        elif age > 120:
            raise ValueError("The age of a patient should not exceed 120 years old.")
        else:
            return age


    def __repr__(self):
        return f"Patient('{self.name} {self.date_of_birth} {self.gender} {self.contact_number}')"

class Staff(db.Model, SerializerMixin):
    __tablename__ = "staffs"
    
    serialize_rules=('-appointments.staff',)
    
    id= db.Column(db.Integer,primary_key=True)
    name=  db.Column(db.String,nullable=False)
    specialisation=  db.Column(db.String,nullable=False)
    start_date=  db.Column(db.String,nullable=False)
    end_date=   db.Column(db.String)
    contact_number=  db.Column(db.String,unique=True)
    email = db.Column(db.String, unique=True)
    status=  db.Column(db.String)
    created_at= db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    
    # users=  db.relationship("User", backref="staff")
    appointments=  db.relationship("Appointment", backref="staff")

    @validates('email')
    def check_email(self, key, value):
        if not re.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", value):
            raise ValueError("Failed email validation")
        return value

    def __repr__(self):
        return f"Staff: {self.name} {self.specialisation} {self.start_date}~{self.end_date if self.end_date else self.func.now()} {self.status}"

class Appointment(db.Model,SerializerMixin):
    __tablename__ = 'appointments'

    serialize_rules = ('-patient.appointments', '-staff.appointments')

    id=  db.Column(db.Integer, primary_key=True)
    appointment_type= db.Column(db.String)
    appointment_date=  db.Column(db.String, nullable=False)
    created_at= db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    patient_id = db.Column(db.Integer, db.ForeignKey("patients.id"))
    staff_id = db.Column(db.Integer, db.ForeignKey("staffs.id"))


    def __repr__(self):
        return f"Appointment('{self.id}, '{self.appointment_type}, '{self.appointment_date})"

class User(db.Model ,SerializerMixin):
    __tablename__= 'users'

    id = db.Column(db.Integer, primary_key= True)
    username = db.Column(db.String, unique=True, nullable= False)
    password = db.Column(db.String, nullable= False)
    role = db.Column(db.String, nullable= False)
    created_at= db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())

    # staffs_id= db.Column(db.Integer,db.ForeignKey("staffs.id"))

    def __repr__(self):
        return f"Username: {self.username} Role: {self.role}"
