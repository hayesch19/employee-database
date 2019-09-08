import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const EmployeeProfile = props => {
  const [employeeId, setEmployeeId] = useState(props.match.params.employeeId)
  const [profile, setProfile] = useState({})

  const fetchProfData = async () => {
    const resp = await Axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/Unique%20Orns/employees/${employeeId}`
    )
    setProfile(resp.data)
    console.log({ data: resp.data })
  }
  useEffect(() => {
    fetchProfData()
  }, [employeeId])

  useEffect(() => {
    console.log(props)
    console.log(props.match.params.employeeId)
    setEmployeeId(props.match.params.employeeId)
  }, [props])

  return (
    <section>
      <div className="profile-info">
        <h3>
          {profile.firstName} {profile.lastName}
        </h3>
        <p>{profile.jobTitle}</p>
        <p>{profile.email}</p>
        <p>{profile.phoneNumber}</p>
      </div>
    </section>
  )
}

export default EmployeeProfile
