import React, { useState } from 'react'

const Tool2: React.FC = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleConvert = () => {
    const lines = input.split('\n').map(line => line.trim()).filter(line => line !== '')
    const formatted = lines.map(line => `'${line}'`).join(',')
    setOutput(formatted)
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">SQL 助手</h3>
      <div className="space-y-2">
        <textarea
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="输入多行文本"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleConvert}
        >
          转换
        </button>
      </div>
      {output && (
        <div>
          <h4 className="text-lg font-semibold text-gray-700">转换结果:</h4>
          <p className="p-2 bg-gray-100 border rounded break-words">{output}</p>
        </div>
      )}
    </div>
  )
}

export default Tool2