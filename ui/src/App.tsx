import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { HeroList } from "@/components/HeroList";
import { HeroDetails } from "@/components/HeroDetails";
import { SearchResults } from "@/components/SearchResults";
import { Company } from "@/types";
import { AddHeroForm } from "./components/AddHeroForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div
          className="min-h-screen bg-background"
          style={{ width: "100vw", height: "100vh", overflow: "scroll" }}
        >
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HeroList />} />
              <Route
                path="/marvel"
                element={<HeroList company={Company.MARVEL} />}
              />
              <Route path="/dc" element={<HeroList company={Company.DC} />} />
              <Route path="/hero/:id" element={<HeroDetails />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/add" element={<AddHeroForm />} />
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
