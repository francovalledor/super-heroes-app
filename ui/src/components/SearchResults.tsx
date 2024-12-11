import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HeroCard } from "@/components/HeroCard";
import { ViewToggle } from "@/components/ui/view-toggle";
import { useSearchHeroes } from "@/hooks/useSearchHeroes";

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [view, setView] = useState<"grid" | "list">("grid");

  const { searchResults, isLoading, error } = useSearchHeroes(query);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-destructive">
        Error loading heroes. Please try again.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Search Results</h1>
          <p className="text-muted-foreground">
            Found {searchResults.length} heroes matching "{query}"
          </p>
        </div>
        <ViewToggle view={view} onViewChange={setView} />
      </div>

      {searchResults.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No heroes found matching your search.
          </p>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${
            view === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {searchResults.map((hero) => (
            <HeroCard key={hero._id} hero={hero} view={view} />
          ))}
        </div>
      )}
    </div>
  );
}
