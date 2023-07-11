import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {

  // States
  const [petName, setPetname] = useState("");
  const [petOwner, setPetowner] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(patient).length > 0) {
      setPetname(patient.petName);
      setPetowner(patient.petOwner);
      setEmail(patient.email);
      setDate(patient.date);
      setSymptoms(patient.symptoms);
    }
  }, [patient])

  // Functions Utilities
  function generateID() {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);

    return fecha + random;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate
    if([petName, petOwner, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const newPatientObj = {
      petName,
      petOwner,
      email,
      date,
      symptoms
    }

    if(patient.id) {
      newPatientObj.id = patient.id;

      const actPatientsList = patients.map(pat => pat.id === patient.id ? newPatientObj : pat);

      setPatients(actPatientsList);
      setPatient({});
    } else {
      newPatientObj.id = generateID();

      const newPatientsList = [...patients, newPatientObj];
      setPatients(newPatientsList);
    }


    // Reset form
    setPetname("");
    setPetowner("");
    setEmail("");
    setDate("");
    setSymptoms("");
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-1">
        <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>

        <p className="text-lg mt-5 text-center font-semibold">
          Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        
        <form id="formulario" className="mt-10 bg-white shadow-md rounded py-10 px-5 mb-10" onSubmit={handleSubmit}>
            {error && 
              <Error>
                <p>Error: Es necesario completar todos los campos</p>
              </Error>
            }
          <div className="mb-5">
            <label htmlFor="petname" className="block text-gray-700 uppercase font-bold">Pet Name</label>
            <input 
              type="text" 
              placeholder="Nombre de su mascota"
              name="petname"
              id="petname"
              className="w-full p-3 mt-2 border-2 placeholder-gray-400 rounded-md"
              value={petName}
              onChange={(e) => setPetname(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="petowner" className="block text-gray-700 uppercase font-bold">Pet Owner</label>
            <input 
              type="text" 
              placeholder="Nombre del propietario"
              name="petowner"
              id="petowner"
              className="w-full p-3 mt-2 border-2 placeholder-gray-400 rounded-md"
              value={petOwner}
              onChange={(e) => setPetowner(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            <input 
              type="email" 
              placeholder="Email del propietario"
              name="email"
              id="email"
              className="w-full p-3 mt-2 border-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Discharge date</label>
            <input 
              type="date"
              name="date"
              id="date"
              className="w-full p-3 mt-2 border-2 placeholder-gray-400 rounded-md"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms</label>
            <textarea className="w-full p-3 mt-2 border-2 placeholder-gray-400 rounded-md" name="symptoms" id="symptoms" value={symptoms} onChange={(e) => setSymptoms(e.target.value)}></textarea>
          </div>

          <input 
            id="submit"
            type="submit" 
            value={patient.id ? "Guardar cambios" : "Agregar paciente"} 
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors mt-5"
          />
        </form>
    </div>
  )
}

export default Form;