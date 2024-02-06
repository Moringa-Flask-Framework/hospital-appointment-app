import React from 'react'
import { useState, useEffect} from "react"

function PatientForm() {
    const  [patients, setPatients] = useState([])

    useEffect(()=>{
        function fetchPatients(){
            try{
                fetch('')
            }
            catch{

            }
        }
        fetchPatients()
    },[])

  return (
    <div>
        
    </div>
  )
}

export default PatientForm