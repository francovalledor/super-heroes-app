import { useState } from "react";
import { useHeroes } from "@/hooks/useHeroes";
import { HeroCard } from "@/components/HeroCard";
import { ViewToggle } from "@/components/ui/view-toggle";
import { Company } from "@/types";

interface HeroListProps {
  company?: Company;
}

export function HeroList({ company }: HeroListProps) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const { heroes, isLoading, error } = useHeroes(company);

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
        <h1 className="text-3xl font-bold">
          {company ? `${company} Heroes` : "All Heroes"}
        </h1>
        <ViewToggle view={view} onViewChange={setView} />
      </div>

      <div
        className={`grid gap-6 ${
          view === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {heroes.map((hero) => (
          <HeroCard key={hero._id} hero={hero} view={view} />
        ))}
      </div>
    </div>
  );
}
