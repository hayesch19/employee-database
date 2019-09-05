import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const HomePage = () => {
  const [staffInfo, setStaffInfo] = useState([])

  const fetchStaffData = async () => {
    const resp = await Axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Unique%20Orns/Employees'
    )
    setStaffInfo(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    fetchStaffData()
  }, [])

  return (
    <main>
      <h3>
        <u>Meet Our Staff</u>
      </h3>
      <section className="staff-card">
        {staffInfo.map((staff, i) => {
          return (
            <section className="staff-info">
              <div className="staff-name">
                <p key={i}>
                  {staff.firstName} {staff.lastName}
                </p>
              </div>
              <div className="staff-title">
                <p>{staff.jobTitle}</p>
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default HomePage
