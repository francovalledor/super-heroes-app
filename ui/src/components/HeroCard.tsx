import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SuperHero } from "@/types";
import { Shield } from "lucide-react";

interface HeroCardProps {
  hero: SuperHero;
  view?: "grid" | "list";
}

export function HeroCard({ hero, view = "grid" }: HeroCardProps) {
  const isGrid = view === "grid";

  return (
    <Link to={`/hero/${hero._id}`}>
      <Card
        className={`overflow-hidden transition-all hover:shadow-lg ${
          isGrid ? "h-full" : "flex flex-row"
        }`}
      >
        <div className={isGrid ? "" : "w-48 shrink-0"}>
          <img
            src={hero.imageUrl}
            alt={hero.name}
            className={`object-cover ${isGrid ? "h-48 w-full" : "h-full w-48"}`}
          />
        </div>

        <div className="flex flex-col flex-grow">
          <CardHeader>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{hero.name}</h3>
              <Badge
                variant={hero.company === "MARVEL" ? "destructive" : "default"}
              >
                {hero.company}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{hero.secretName}</p>
          </CardHeader>

          <CardContent>
            <p className="text-sm line-clamp-2">{hero.biography}</p>
          </CardContent>

          <CardFooter className="flex justify-between mt-auto">
            <div className="flex items-center text-sm text-muted-foreground">
              <Shield className="h-4 w-4 mr-1" />
              {hero.appearanceYear}
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
