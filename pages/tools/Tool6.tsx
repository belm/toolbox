import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const Tool6: React.FC = () => {
  const [length, setLength] = useState(16)
  const [complexity, setComplexity] = useState('complex')
  const [password, setPassword] = useState('')

  useEffect(() => {
    generatePassword()
  }, [])

  const generatePassword = () => {
    const simpleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const complexChars = simpleChars + '!@#$%^&*()_+[]{}|;:,.<>?'
    const chars = complexity === 'complex' ? complexChars : simpleChars

    let generatedPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)
      generatedPassword += chars[randomIndex]
    }

    setPassword(generatedPassword)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
    toast.success('密码已复制到剪贴板')
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">随机密码生成工具</h3>
      <div className="space-y-2">
        <label className="block text-gray-700">
          密码长度: {length}
        </label>
        <input
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full"
        />
        <div className="space-y-2">
          <label className="block text-gray-700">
            密码复杂度:
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="complexity"
                value="simple"
                checked={complexity === 'simple'}
                onChange={(e) => setComplexity(e.target.value)}
                className="mr-2"
              />
              简单
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="complexity"
                value="complex"
                checked={complexity === 'complex'}
                onChange={(e) => setComplexity(e.target.value)}
                className="mr-2"
              />
              复杂
            </label>
          </div>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={generatePassword}
        >
          生成密码
        </button>
      </div>
      {password && (
        <div>
          <h4 className="text-lg font-semibold text-gray-700">生成的密码:</h4>
          <p className="p-2 bg-gray-100 border rounded break-words">{password}</p>
          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={copyToClipboard}
          >
            复制密码
          </button>
        </div>
      )}
    </div>
  )
}

export default Tool6