import './App.css';
import Login from './components/Login';
import PatientForm from './components/PatientForm';
import PatientTable from './components/PatientTable';
import DoctorForm from './components/DoctorForm';
import DoctorTable from './components/DoctorTable';
import AppointmentForm from './components/AppointmentForm'
import AppointmentTable from './components/AppointmentTable';
import { Route, Switch} from "react-router-dom";
import Patients from './pages/Patients';
import Doctor from './pages/Doctor';
import Appointment from './pages/Appointment';
import Menu from './components/Menu';
import Home from './pages/Home';
import SignUp from './components/Signup';

function App() {
  return (
    <div className="App">
          <Switch>
              <Route path="/patients/:id">
                <PatientTable />
              </Route>
              <Route path="/patients">
                <Patients />
              </Route>
              <Route path="/staffs/:id">
                <DoctorTable />
              </Route>
              <Route path="/staffs">
                <Doctor />
              </Route>
              <Route path="/appointments/:id">
                <AppointmentTable />
              </Route>
              <Route path="/appointments">
                <Appointment />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
              </Route>
          </Switch>
          {/* <SignUp/> */}
    </div>
  );
}

export default App;
