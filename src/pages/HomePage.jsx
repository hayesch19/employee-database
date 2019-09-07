import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const HomePage = () => {
  const [staffInfo, setStaffInfo] = useState([])

  const fetchStaffData = async () => {
    const resp = await Axios.get(
      'https://sdg-staff-directory-app.herokuapp.com/api/Unique%20Orns/Employees'
    )
    setStaffInfo(resp.data)
    console.log(resp.data, 'Staff')
  }

  useEffect(() => {
    fetchStaffData()
  }, [])

  return (
    <main>
      <h2>
        <u>Meet Our Staff</u>
      </h2>
      <section className="staff-card">
        {staffInfo.map((staff, i) => {
          return (
            <section key={i} className="staff-info">
              <div className="staff-name">
                <Link to={{ pathname: `/employee/${staff.id}` }}>
                  <h3>
                    {staff.firstName} {staff.lastName}
                  </h3>
                </Link>
              </div>
              <div className="staff-title">
                <p>
                  <u>{staff.jobTitle}</u>
                </p>
              </div>
            </section>
          )
        })}
      </section>
    </main>
  )
}

export default HomePage
