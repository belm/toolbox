import React, { useState } from 'react'

const Tool3: React.FC = () => {
  const [timestamp, setTimestamp] = useState('')
  const [formattedTime, setFormattedTime] = useState('')

  const getCurrentTimestamp = () => {
    setTimestamp(Date.now().toString())
  }

  const handleConvert = () => {
    const date = new Date(parseInt(timestamp))
    const formatted = date.toISOString().replace('T', ' ').substring(0, 19)
    setFormattedTime(formatted)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">时间工具</h3>
      <div className="space-y-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={getCurrentTimestamp}
        >
          获取当前时间戳
        </button>
        {timestamp && (
          <div>
            <h4 className="text-lg font-semibold text-gray-700">当前时间戳:</h4>
            <p className="p-2 bg-gray-100 border rounded break-words">{timestamp}</p>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <textarea
          className="w-full p-2 border rounded"
          rows={2}
          placeholder="输入时间戳"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleConvert}
        >
          转换
        </button>
        {formattedTime && (
          <div>
            <h4 className="text-lg font-semibold text-gray-700">转换结果:</h4>
            <p className="p-2 bg-gray-100 border rounded break-words">{formattedTime}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tool3