import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { tools } from '../lib/tools'

const Sidebar: React.FC = () => {
  const router = useRouter()
  const currentTool = router.query.tool as string

  return (
    <nav className="w-64 bg-white shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">工具箱</h1>
      <ul>
        {tools.map((tool) => (
          <li key={tool.id} className="mb-2">
            <Link href={`/tools/${tool.id}`}>
              <a className={`block p-3 rounded-lg transition-colors duration-200 ${
                currentTool === tool.id 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 hover:bg-gray-200'
              }`}>
                {tool.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar