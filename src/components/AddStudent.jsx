import React, { useState } from 'react'

function AddStudent({ students, setStudents }) {
  const [newStudent, setNewStudent] = useState({
    id: "",
    name: "",
    score: ""
  })

  const handleNameChange = (value, index) => {
    setNewStudent((s) => ({
      ...s,
      id: students.length + 1,
      name: value
    }))
  }

  const handleScoreChange = (value, index) => {
    setNewStudent((s) => ({
      ...s,
      score: value
    }))
  }

  const submitStudent = () => {
    setStudents((prev) => [...prev, newStudent])

    setNewStudent({
      id: "",
      name: "",
      score: ""
    })
  }

  return (
    <div>
      <div className="w-full flex flex-col border rounded mb-4 bg-white">

        <div className="border-b p-2 bg-blue-100"></div>

        <div className="flex">
          <input
            type="text"
            placeholder="STUDENT NAME"
            className="flex-1 p-2 border-r outline-none"
            value={newStudent.name}
            onChange={(e) => handleNameChange(e.target.value)}
          />

          <input
            type="text"
            placeholder="SCORE (0-100)"
            className="flex-1 p-2 border-r outline-none"
            value={newStudent.score}
            onChange={(e) => handleScoreChange(e.target.value)}
          />

          <button
            className="px-4 bg-blue-500 text-white hover:bg-blue-600"
            onClick={submitStudent}
          >
            ADD
          </button>
        </div>

      </div>
    </div>
  )
}

export default AddStudent