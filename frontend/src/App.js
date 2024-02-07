import './App.css';
import Login from './components/Login';
import PatientForm from './components/PatientForm';
import PatientTable from './components/PatientTable';
import Login from './components/Login';
import DoctorForm from './components/DoctorForm';
import DoctorTable from './components/DoctorTable';
import AppointmentForm from './components/AppointmentForm'
import AppointmentTable from './components/AppointmentTable';
import SignUp from './components/SignUp';
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = "/patients">
          <PatientForm/>
          <PatientTable />
        </Route>
        <Route exact path = "/patients/:id">
          <PatientTable/>
        </Route>
        <Route path="/staffs">
          <DoctorForm/>
          <DoctorTable/>
        </Route>
        <Route exact path = "/staffs/:id">
          <DoctorTable/>
        </Route>
        <Route path="/appointments">
          <AppointmentForm/>
          <AppointmentTable/>
        </Route>
        <Route exact path = "/appointments/:id">
          <AppointmentTable/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/logout"/>
        <Route exact path="/checkSession"/>
      </Switch>
      
      {/* <Login/> */}
    </div>
  );
}

export default App;
