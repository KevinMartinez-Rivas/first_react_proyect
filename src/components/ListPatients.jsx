import Patient from "./Patient";

const ListPatients = ({patients, setPatient, deletePatient}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5">
            {patients && patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
    
                    <p className="text-lg mt-5 text-center font-semibold mb-10">
                        Administra tus {""}
                    <span className="text-indigo-600">pacientes y citas</span>
                    </p>  

                    <div className="md:h-screen md:overflow-y-scroll">
                        { patients.map( patient => (
                            <Patient
                                key={patient.id}
                                patient={patient}
                                setPatient={setPatient}
                                deletePatient={deletePatient}
                            />
                        )) }
                    </div>
                </>     
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-lg mt-5 text-center font-semibold mb-10">
                        Comienza a agregar {""}
                    <span className="text-indigo-600">nuevos pacientes</span>
                    </p>  
                </>
            )}
        </div>
    )
}

export default ListPatients;