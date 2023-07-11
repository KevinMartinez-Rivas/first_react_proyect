// Hooks
import { useState, useEffect } from "react";

// UI
import Header from "./components/Header";
import Form from "./components/Form";
import ListPatients from "./components/ListPatients";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getPatients = () => {
      const patientsToLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      if(patientsToLS.length > 0){
        setPatients(patientsToLS);
      }
    }

    getPatients();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(patients));
  }, [patients])

  const deletePatient = (id) => {
    const newPatientList = patients.filter( patientsState => patientsState.id != id);
    setPatients(newPatientList);
  }

  return (
    <div className="mx-auto container mt-8">
      <Header />
      
      <div className="mt-12 flex md:flex-row flex-col">
        <Form 
          setPatients={setPatients}
          patients={patients}
          patient={patient}
          setPatient={setPatient}
        />
        <ListPatients 
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
