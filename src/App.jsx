import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Pokedex from './components/pokemon/Pokedex';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="container mx-auto min-h-full ">
        <QueryClientProvider client={queryClient}>
          <Pokedex />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
