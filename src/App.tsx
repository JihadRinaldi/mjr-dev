import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4">MJR Dev Portfolio</h1>
                  <p className="text-lg text-muted-foreground">
                    Welcome to Muhammad Rinaldi's Developer Portfolio
                  </p>
                </div>
              } />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;