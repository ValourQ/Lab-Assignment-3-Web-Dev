import React, { useState, useEffect } from 'react'

function AllDetails({ students, updateScore }) {
  const [inputs, setInputs] = useState(students.map(s => s.score))

  const handleChange = (index, value) => {
    const newInputs = [...inputs]
    newInputs[index] = value
    setInputs(newInputs)
  }

  useEffect(() => {
    setInputs(students.map(s => s.score))
  }, [students])

  return (
    <div className="w-full">

      <div className="flex border p-2 justify-between bg-blue-100">
        <span className="font-medium text-blue-800">STUDENT RECORDS</span>
        <span className="text-blue-700">{students.length} Entries</span>
      </div>

      <table className="w-full border border-t-0">
        <thead>
          <tr className="bg-blue-50">
            <th className="text-left p-2 border">Name</th>
            <th className="text-left p-2 border">Score</th>
            <th className="text-left p-2 border">Status</th>
            <th className="text-left p-2 border">Update</th>
          </tr>
        </thead>

        <tbody>
          {students.map((item, index) => {
            return (
              <tr key={item.id}>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">{item.score}</td>

                <td className="p-2 border">
                  {item.score >= 40 ? (
                    <span className="px-2 py-1 text-sm border border-green-500 text-green-700 bg-green-100 rounded">
                      Pass
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-sm border border-red-500 text-red-700 bg-red-100 rounded">
                      Fail
                    </span>
                  )}
                </td>

                <td className="p-2 border flex gap-2 items-center">
                  <input
                    type="text"
                    value={inputs[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    className="w-12 p-1 border rounded"
                  />
                  <button
                    className="px-2 border bg-blue-500 text-white hover:bg-blue-600"
                    onClick={() => updateScore(index, inputs[index])}
                  >
                    Save
                  </button>
                </td>

              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default AllDetails