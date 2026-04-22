import React, { useState } from 'react'
import Heading from './components/Heading'
import AddStudent from './components/AddStudent'
import StudentsSummary from './components/StudentsSummary'
import AllDetails from './components/AllDetails'

function App() {
  const initialStudents = [
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Alex", score: 67 },
    { id: 3, name: "Shaurya", score: 39 }
  ]

  const [students, setStudents] = useState(initialStudents)

  const updateScore = (index, newScore) => {
  const updated = students.map((s, i) =>
    i === index ? { ...s, score: Number(newScore) } : s
  )
  setStudents(updated)
}

  return (
   <div className="min-h-screen bg-blue-50">
  <div className="p-6 max-w-4xl mx-auto">
    <Heading />
    <AddStudent students={students} setStudents={setStudents} />
    <StudentsSummary students={students} />
    <AllDetails students={students} updateScore={updateScore} />
  </div>
</div>
  )
}

export default App;