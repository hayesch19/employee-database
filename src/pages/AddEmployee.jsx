import React, { useState } from 'react'
import Axios from 'axios'

const AddEmployee = () => {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    jobTitle: ''
  })

  const addNewEmployee = async e => {
    e.preventDefault()
    const resp = Axios.post(
      'https://sdg-staff-directory-app.herokuapp.com/api/Unique%20Orns/Employees',
      { person }
    )
  }

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
            onSubmit={updateInput}
          ></input>
          <input
            placeholder="Last"
            type="text"
            id="lastName"
            onSubmit={updateInput}
          ></input>
          <input
            placeholder="Job Title"
            type="text"
            id="jobTitle"
            onSubmit={updateInput}
          ></input>

          <button type="submit">Add Team Member</button>
        </form>
      </section>
    </main>
  )
}

export default AddEmployee
