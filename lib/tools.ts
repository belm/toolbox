import { ComponentType } from 'react'
import dynamic from 'next/dynamic'

interface Tool {
  id: string
  name: string
  component: ComponentType
}

export const tools: Tool[] = [
  {
    id: 'tool1',
    name: 'URL 编码/解码工具',
    component: dynamic(() => import('../pages/tools/Tool1'))
  },
  {
    id: 'tool2',
    name: 'SQL 助手',
    component: dynamic(() => import('../pages/tools/Tool2'))
  },
  {
    id: 'tool3',
    name: '时间工具',
    component: dynamic(() => import('../pages/tools/Tool3'))
  },
  {
    id: 'tool4',
    name: '加解密工具',
    component: dynamic(() => import('../pages/tools/Tool4'))
  },
  {
    id: 'tool5',
    name: 'JSON 格式化工具',
    component: dynamic(() => import('../pages/tools/Tool5'))
  },
  {
    id: 'tool6',
    name: '随机密码生成工具',
    component: dynamic(() => import('../pages/tools/Tool6'))
  },
  // 添加更多工具...
]