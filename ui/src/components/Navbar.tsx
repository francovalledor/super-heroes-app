import { Link, useNavigate } from "react-router-dom";
import { Shield, Plus } from "lucide-react";
import { SearchInput } from "@/components/ui/search-input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6" />
          <span className="font-bold">SuperHero DB</span>
        </Link>

        <div className="flex items-center space-x-6 ml-6">
          <Link to="/marvel" className="text-sm font-medium hover:text-primary">
            Marvel
          </Link>
          <Link to="/dc" className="text-sm font-medium hover:text-primary">
            DC Comics
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-primary">
            All Heroes
          </Link>
          <Link
            to="/add"
            className="flex items-center space-x-1 text-sm font-medium hover:text-primary"
          >
            <Plus className="h-4 w-4" />
            <span>Add Hero</span>
          </Link>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <div className="w-64">
            <SearchInput
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search heroes..."
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="ml-2"
          >
            ←
          </Button>
        </div>
      </div>
    </nav>
  );
}
