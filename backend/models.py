from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

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
    created_at= db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())

    appointments= db.relationship('Appointment', backref= 'patient')

    def __repr__(self):
        return f"Patient('{self.name} {self.date_of_birth} {self.gender} {self.contact_number}')"

class  Staff(db.Model):
    __tablename__ = "staffs"
    
    id= db.Column(db.Integer,primary_key=True)
    name=  db.Column(db.String,nullable=False)
    specialisation=  db.Column(db.String,nullable=False)
    start_date=  db.Column(db.Date,nullable=False,default=db.func.now())
    end_date=   db.Column(db.Date)
    contact_number=  db.Column(db.String,unique=True)
    email = db.Column(db.String, unique=True)
    status=  db.Column(db.Boolean(), default=True)
    created_at= db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    
    user_id= db.Column(db.Integer,db.ForeignKey("users.id"))
    user=  db.relationship("User",backref="staff")
    appointments=  db.relationship("Appointment", backref="staff")

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

    staff=  db.relationship("Staff", uselist=False, backref= 'user')

    def __repr__(self):
        return f"Username: {self.username} Role: {self.role}"
