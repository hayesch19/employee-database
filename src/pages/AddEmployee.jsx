import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const AddEmployee = () => {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    jobTitle: ''
  })

  const addNewEmployee = async => {
    const resp = Axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/Unique%20Orns/Employees',
      { person }
    )
  }
  useEffect(() => {
    addNewEmployee()
  }, [])

  const updateInput = e => {
    setPerson({
      ...person,
      [e.target.id]: e.target.value
    })
  }

  return (
    <main>
      <h2>Add A Staff Member</h2>
      <section className="add-staff-area">
        <form action="" onSubmit={addNewEmployee}>
          <input
            placeholder="First"
            type="text"
            id="firstName"
            onChange={updateInput}
          ></input>
          <input
            placeholder="Last"
            type="text"
            id="lastName"
            onChange={updateInput}
          ></input>
          <input
            placeholder="Job Title"
            type="text"
            id="jobTitle"
            onChange={updateInput}
          ></input>

          <button type="submit" name="action">
            Add Team Member
          </button>
        </form>
      </section>
    </main>
  )
}

export default AddEmployee
