import React from 'react'
import { useRouter } from 'next/router'
import { tools } from '../lib/tools'

const ToolContainer: React.FC = () => {
  const router = useRouter()
  const currentTool = router.query.tool as string

  const tool = tools.find((t) => t.id === currentTool)

  if (!tool) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">请选择一个工具</h2>
      </div>
    )
  }

  const ToolComponent = tool.component

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{tool.name}</h2>
      <div className="bg-gray-50 p-4 rounded-lg">
        <ToolComponent />
      </div>
    </div>
  )
}

export default ToolContainer