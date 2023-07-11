const Patient = ({ patient, setPatient, deletePatient }) => {
    const {petName, petOwner, email, date, symptoms} = patient;

    const handleDelete = () => {
        const res = confirm("¿Do you want to delete this?");

        if(res) {
            deletePatient(patient.id);
        }
    }

    return (
        <>
            <div className="bg-white shadow-md m-3 px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Name: {""}
                    <span className="font-normal normal-case">{petName}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Owner Name: {""}
                    <span className="font-normal normal-case">{petOwner}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Discharge Date: {""}
                    <span className="font-normal normal-case">{date}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {""}
                    <span className="font-normal normal-case">{symptoms}</span>
                </p>

                <div className="mt-5">
                    <button
                        type="button"
                        className="py-2 px-10 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors me-3"
                        onClick={() => setPatient(patient)}
                    >Edit</button>

                    <button
                        type="button"
                        className="py-2 px-10 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition-colors"
                        onClick={handleDelete}
                    >Delete</button>
                </div>
            </div>           
        </>
    )
}

export default Patient;