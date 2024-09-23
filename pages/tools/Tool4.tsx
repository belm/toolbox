import React, { useState } from 'react'
import crypto from 'crypto'

const Tool4: React.FC = () => {
  const [input, setInput] = useState('')
  const [md5Hash, setMd5Hash] = useState('')
  const [base64Input, setBase64Input] = useState('')
  const [base64Encoded, setBase64Encoded] = useState('')
  const [base64Decoded, setBase64Decoded] = useState('')

  const handleMd5 = () => {
    const hash = crypto.createHash('md5').update(input).digest('hex')
    setMd5Hash(hash)
  }

  const handleBase64Encode = () => {
    const encoded = Buffer.from(base64Input).toString('base64')
    setBase64Encoded(encoded)
  }

  const handleBase64Decode = () => {
    try {
      const decoded = Buffer.from(base64Input, 'base64').toString('utf-8')
      setBase64Decoded(decoded)
    } catch (error) {
      setBase64Decoded('无效的Base64字符串')
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">加解密工具</h3>
      <div className="space-y-2">
        <textarea
          className="w-full p-2 border rounded"
          rows={2}
          placeholder="输入要计算MD5的文本"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleMd5}
        >
          获取MD5
        </button>
        {md5Hash && (
          <div>
            <h4 className="text-lg font-semibold text-gray-700">MD5 结果:</h4>
            <p className="p-2 bg-gray-100 border rounded break-words">{md5Hash}</p>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <textarea
          className="w-full p-2 border rounded"
          rows={2}
          placeholder="输入要Base64编码的文本"
          value={base64Input}
          onChange={(e) => setBase64Input(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleBase64Encode}
        >
          Base64 编码
        </button>
        {base64Encoded && (
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Base64 编码结果:</h4>
            <p className="p-2 bg-gray-100 border rounded break-words">{base64Encoded}</p>
          </div>
        )}
      </div>
      <div className="space-y-2">
        <textarea
          className="w-full p-2 border rounded"
          rows={2}
          placeholder="输入要Base64解码的文本"
          value={base64Input}
          onChange={(e) => setBase64Input(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleBase64Decode}
        >
          Base64 解码
        </button>
        {base64Decoded && (
          <div>
            <h4 className="text-lg font-semibold text-gray-700">Base64 解码结果:</h4>
            <p className="p-2 bg-gray-100 border rounded break-words">{base64Decoded}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tool4