from faker import Faker
from random import choice, randint
from datetime import date, timedelta
from app import app
from models import db, Patient, Staff, Appointment, User

# db.init_app(app)

fake = Faker()

with app.app_context():

    Patient.query.delete()
    Staff.query.delete()
    Appointment.query.delete()
    User.query.delete()

    print("Seeding patient....................")
    for i in range(10):
        genders = ['male', 'female']
        new_patient = Patient(name=fake.name(), date_of_birth=fake.date_of_birth(minimum_age=1, maximum_age=100), age = randint(1,100), gender = choice(genders), contact_number = fake.phone_number(), email = fake.email())
        db.session.add(new_patient)
        db.session.commit()

    print("Seeding staff....................")
    users = User.query.all()
    for i in range(10):

        specialization = ["Doctor", "Nurse", "ER medic", "Receptionist", "Head Doctor"]
        statuses = ["Active", "Inactive", "On-leave"]
        new_staff = Staff(name=fake.name(), specialisation=choice(specialization),start_date= fake.date_of_birth(minimum_age=1, maximum_age=200),end_date = fake.date_of_birth(minimum_age=1, maximum_age=200), contact_number = fake.phone_number(), email = fake.email(), status = choice(statuses))
        db.session.add(new_staff)
        db.session.commit()

    print("Seeding appointment....................")
    patients = Patient.query.all()
    staffs = Staff.query.all()
    for i in range(10):
        rand_patient= choice(patients)
        rand_staff= choice(staffs)
        start_date = date.today() - timedelta(days=65*365)
        end_date = date.today() - timedelta(days=18*365)
        fake_date = fake.date_between_dates(start_date, end_date)
        appoint_types = ["Surgery", "Orthopedic", "Dental", "Optic", "Maternity", "Child Clinic", "X-ray"]
        new_appointment= Appointment(appointment_type=choice(appoint_types) , appointment_date=fake_date , patient_id = rand_patient.id, staff_id = rand_staff.id)
        db.session.add(new_appointment)
        db.session.commit()
    print("Seeding users....................")
    for i in range(10):
        roles = ["Doctor", "Nurse", "ER medic", "Receptionist", "Head Doctor"]
        passwords = ["2234", 'lekeoe', 'Kol2022', 'kw94389292', '223dedw2', 'brwuw124422']
        new_user = User(username = fake.user_name(), password = choice(passwords), role = choice(roles))
        db.session.add(new_user)
        db.session.commit()

    print("Finished seeding data.............")