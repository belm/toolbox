import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { diffChars, diffWords, diffLines } from 'diff'

const TextComparisonTool: React.FC = () => {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [comparisonType, setComparisonType] = useState('lines') // 默认设置为 'lines'
  const [diffResult, setDiffResult] = useState<any[]>([])

  const compareTexts = () => {
    let diff
    switch (comparisonType) {
      case 'chars':
        diff = diffChars(text1, text2)
        break
      case 'words':
        diff = diffWords(text1, text2)
        break
      case 'lines':
        diff = diffLines(text1, text2)
        break
      default:
        diff = diffChars(text1, text2)
    }
    setDiffResult(diff)
  }

  const renderDiff = () => {
    if (comparisonType === 'lines') {
      let lineNumber = 1
      return (
        <table className="w-full border-collapse">
          <tbody>
            {diffResult.map((part, index) => {
              const bgColor = part.added ? 'bg-green-200' : part.removed ? 'bg-red-200' : 'bg-gray-100'
              const lines = part.value.split('\n')
              return lines.map((line: string, lineIndex: number) => (
                <tr key={`${index}-${lineIndex}`} className={`${bgColor}`}>
                  <td className="border px-2 py-1 text-right w-12">{lineNumber++}</td>
                  <td className="border px-2 py-1 whitespace-pre-wrap">{line}</td>
                </tr>
              ))
            })}
          </tbody>
        </table>
      )
    } else {
      return diffResult.map((part, index) => {
        const color = part.added ? 'bg-green-200' : part.removed ? 'bg-red-200' : 'bg-gray-100'
        return (
          <span key={index} className={`${color} inline-block`}>
            {part.value}
          </span>
        )
      })
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">文本比对工具</h3>
      <div className="grid grid-cols-2 gap-4">
        <textarea
          className="w-full h-40 p-2 border rounded"
          placeholder="输入第一段文本"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
        <textarea
          className="w-full h-40 p-2 border rounded"
          placeholder="输入第二段文本"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
      </div>
      <div className="space-x-4">
        <select
          className="p-2 border rounded"
          value={comparisonType}
          onChange={(e) => setComparisonType(e.target.value)}
        >
          <option value="lines">按行比较</option>
          <option value="chars">按字符比较</option>
          <option value="words">按单词比较</option>
        </select>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={compareTexts}
        >
          比较文本
        </button>
      </div>
      {diffResult.length > 0 && (
        <div className="mt-4 p-4 border rounded">
          <h4 className="text-lg font-semibold text-gray-700 mb-2">比较结果:</h4>
          <div className={`${comparisonType === 'lines' ? '' : 'whitespace-pre-wrap'}`}>{renderDiff()}</div>
        </div>
      )}
    </div>
  )
}

export default TextComparisonTool