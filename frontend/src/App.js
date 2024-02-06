import './App.css';
import Login from './components/Login';
import PatientForm from './components/PatientForm';
import PatientTable from './components/PatientTable';

function App() {
  return (
    <div className="App">
      <PatientForm/>
      {/* <Login/> */}
      <PatientTable/>
    </div>
  );
}

export default App;
