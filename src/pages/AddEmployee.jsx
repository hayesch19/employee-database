import React from 'react'

const AddEmployee = () => {
  // const [firstName, setFirstName] = useState('')

  // Marks Challenge
  //  const [person, setPerson] = useState({})

  return (
    <main>
      <h3>Add A Staff Member</h3>
      <section className="add-staff-area">
        <input placeholder="First" type="text"></input>
        <input placeholder="Last" type="text"></input>
        <input placeholder="Job Title" type="text"></input>
        <button>Add Team Member</button>
      </section>
    </main>
  )
}

export default AddEmployee
