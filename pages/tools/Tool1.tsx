import React, { useState } from 'react'

const Tool1: React.FC = () => {
  const [input, setInput] = useState('')
  const [encoded, setEncoded] = useState('')
  const [decoded, setDecoded] = useState('')

  const handleEncode = () => {
    setEncoded(encodeURIComponent(input))
  }

  const handleDecode = () => {
    setDecoded(decodeURIComponent(input))
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">URL 编码/解码工具</h3>
      <div className="space-y-2">
        <textarea
          className="w-full p-2 border rounded"
          rows={4}
          placeholder="输入要编码或解码的URL"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleEncode}
          >
            编码
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleDecode}
          >
            解码
          </button>
        </div>
      </div>
      {encoded && (
        <div>
          <h4 className="text-lg font-semibold text-gray-700">编码结果:</h4>
          <p className="p-2 bg-gray-100 border rounded break-words">{encoded}</p>
        </div>
      )}
      {decoded && (
        <div>
          <h4 className="text-lg font-semibold text-gray-700">解码结果:</h4>
          <p className="p-2 bg-gray-100 border rounded break-words">{decoded}</p>
        </div>
      )}
    </div>
  )
}

export default Tool1