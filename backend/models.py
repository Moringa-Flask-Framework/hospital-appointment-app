from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

db = SQLAlchemy()

class Patient(db.Model, SerializerMixin):
    __tablename__ = 'patients'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    date_of_birth = db.Column(db.Date, nullable=False)
    age= db.Column(db.Integer,nullable=False)
    gender = db.Column(db.String, nullable=False)
    contact_number = db.Column(db.String, nullable=False)
    email =  db.Column(db.String, unique=True)
    created_at= db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now())

    appointments= db.relationship('Appointment', backref= 'patient')

    @validates('age','contact_number','email')
    def validate_fields(self, key, value):
        if key == 'age':
            if 18 <= value <=90:
                raise  ValueError("Age must be between 18 and 90")
            return value
        elif key=='contact_number':
            if len(value)!=13 or not value.isdigit():
                raise ValueError("Contact number should be a 13 digit number.")
            return value
        elif  key=='email':
            if '@' not in value:
                raise ValueError('Email must contain @"` character')
            return  value.lower()


    def __repr__(self):
        return f"Patient('{self.name} {self.date_of_birth} {self.gender} {self.contact_number}')"

class  Staff(db.Model):
    __tablename__ = "staffs"
    
    id= db.Column(db.Integer,primary_key=True)
    name=  db.Column(db.String,nullable=False)
    specialisation=  db.Column(db.String,nullable=False)
    start_date=  db.Column(db.DateTime,nullable=False,default=db.func.now())
    end_date=   db.Column(db.String)
    contact_number=  db.Column(db.String,unique=True)
    email = db.Column(db.String, unique=True)
    status=  db.Column(db.String)
    created_at= db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    
    # users=  db.relationship("User", backref="staff")
    appointments=  db.relationship("Appointment", backref="staff")

    @validates('email')
    def check_email(self, key, address):
        if '@' not in address:
            raise ValueError("Failed simple email validation")
        return address

    def __repr__(self):
        return f"Staff: {self.name} {self.specialisation} {self.start_date}~{self.end_date if self.end_date else self.func.now()} {self.status}"

class Appointment(db.Model):
    __tablename__ = 'appointments'

    id=  db.Column(db.Integer, primary_key=True)
    appointment_type= db.Column(db.String)
    appointment_date=  db.Column(db.Date, nullable=False)
    created_at= db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    patient_id = db.Column(db.Integer, db.ForeignKey("patients.id"), nullable=False)
    staff_id = db.Column(db.Integer, db.ForeignKey("staffs.id"))


    def __repr__(self):
        return f"Appointment('{self.id}, '{self.appointment_type}, '{self.appointment_date})"

class User(db.Model):
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