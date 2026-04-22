import React from 'react'

function StudentsSummary({ students }) {

  const total = students.length

  const passed = students.filter(s => Number(s.score) >= 40).length

  const avg =
    total > 0
      ? Math.round(
          students.reduce((sum, s) => sum + Number(s.score), 0) / total
        )
      : 0

  return (
    <div className="w-full flex border rounded mb-4 overflow-hidden">

      <div className="flex flex-col flex-1 p-3 bg-blue-100 border-r">
        <div className="flex flex-col">
          <span className="text-blue-700 text-sm">TOTAL</span>
          <span className="text-2xl font-semibold text-blue-800">{total}</span>
        </div>
        <span></span>
      </div>

      <div className="flex flex-col flex-1 p-3 bg-green-100 border-r">
        <div className="flex flex-col">
          <span className="text-green-700 text-sm">PASSED</span>
          <span className="text-2xl font-semibold text-green-800">{passed}</span>
        </div>
        <span></span>
      </div>

      <div className="flex flex-col flex-1 p-3 bg-purple-100">
        <div className="flex flex-col">
          <span className="text-purple-700 text-sm">AVG SCORE</span>
          <span className="text-2xl font-semibold text-purple-800">{avg}</span>
        </div>
        <span></span>
      </div>

    </div>
  )
}

export default StudentsSummary