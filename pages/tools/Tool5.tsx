import React, { useState } from 'react'

const Tool5: React.FC = () => {
  const [input, setInput] = useState('')
  const [formattedJson, setFormattedJson] = useState('')

  const handleFormatJson = () => {
    try {
      const json = JSON.parse(input)
      const formatted = JSON.stringify(json, null, 2)
      setFormattedJson(formatted)
    } catch (error) {
      setFormattedJson('无效的JSON字符串')
    }
  }

  // 新增：处理 JSON 编码
  const handleJsonEncode = () => {
    const encoded = JSON.stringify(input)
    setFormattedJson(encoded)
  }

  // 新增：处理 JSON 解码
  const handleJsonDecode = () => {
    try {
      const json = JSON.parse(input)
      const formatted = JSON.stringify(json, null, 2)
      setFormattedJson(formatted)
    } catch (error) {
      setFormattedJson('无效的JSON字符串')
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">JSON 格式化工具</h3>
      <div className="space-y-2">
        <textarea
          className="w-full p-2 border rounded"
          rows={6}
          placeholder="输入JSON格式字符串"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex space-x-2"> {/* 新增：使用 flex 和 space-x-2 添加间隔 */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleFormatJson}
          >
            格式化
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleJsonEncode}
          >
            JSON 编码
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={handleJsonDecode}
          >
            JSON 解码
          </button>
        </div>
      </div>
      {formattedJson && (
        <div>
          <h4 className="text-lg font-semibold text-gray-700">格式化结果:</h4>
          <pre className="p-2 bg-gray-100 border rounded break-words whitespace-pre-wrap">{formattedJson}</pre>
        </div>
      )}
    </div>
  )
}

export default Tool5
