import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Normal from './page/Normal.tsx'
import New from './page/New.tsx'
import '@fontsource/barlow-semi-condensed/600.css'
import '@fontsource/barlow-semi-condensed/700.css'
import './index.css'
import { Result } from './page/Result.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Normal />,
  },
  {
    path: '/new',
    element: <New />,
  },
  {
    path: '/result',
    element: <Result />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
