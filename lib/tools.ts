import { ComponentType } from 'react'
import dynamic from 'next/dynamic'

interface Tool {
  id: string
  name: string
  component: ComponentType
}

export const tools: Tool[] = [
  {
    id: 'url',
    name: 'URL 编码/解码工具',
    component: dynamic(() => import('../pages/tools/Tool1'))
  },
  {
    id: 'sql',
    name: 'SQL 助手',
    component: dynamic(() => import('../pages/tools/Tool2'))
  },
  {
    id: 'time',
    name: '时间工具',
    component: dynamic(() => import('../pages/tools/Tool3'))
  },
  {
    id: 'encrypt',
    name: '加解密工具',
    component: dynamic(() => import('../pages/tools/Tool4'))
  },
  {
    id: 'json',
    name: 'JSON 格式化工具',
    component: dynamic(() => import('../pages/tools/Tool5'))
  },
  {
    id: 'password',
    name: '随机密码生成工具',
    component: dynamic(() => import('../pages/tools/Tool6'))
  },
  // 添加更多工具...
]