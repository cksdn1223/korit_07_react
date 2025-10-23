
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginContainer from './components/LoginContainer'

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <LoginContainer />
      </QueryClientProvider>
    </>
  );
}

export default App
