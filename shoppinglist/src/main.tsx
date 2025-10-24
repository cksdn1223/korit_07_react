import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginContainer from './LoginContainer.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoginContainer />
    </QueryClientProvider>
  </React.StrictMode>,
)
