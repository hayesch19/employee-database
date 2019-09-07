import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const EmployeeProfile = props => {
  const [profInfo, setProfInfo] = useState({ profile: [] })
  const [employeeId, setEmployeeId] = useState(props.match.params.employeeId)

  const fetchProfData = async () => {
    const resp = await Axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/Unique%20Orns/employees/${employeeId}`
    )
    setProfInfo(resp.data)
    console.log({ data: resp.data })
  }
  useEffect(() => {
    fetchProfData()
  }, [])

  return (
    <div>
      <h3>Employee Profile</h3>
    </div>
  )
}

export default EmployeeProfile
