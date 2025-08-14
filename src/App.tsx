import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Layout } from "@/components/Layout";
import { NotFound } from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={
                <div className="container mx-auto px-4 py-8">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">MJR Dev Portfolio</h1>
                    <p className="text-lg text-muted-foreground">
                      Welcome to Muhammad Rinaldi's Developer Portfolio
                    </p>
                  </div>
                </div>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;