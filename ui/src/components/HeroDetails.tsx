import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Shield, Sword } from "lucide-react";
import { useHero } from "@/hooks/useHero";

export function HeroDetails() {
  const { id = "" } = useParams();
  const { hero, error, isLoading } = useHero(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (error || !hero) {
    return (
      <div className="text-center text-destructive">
        Hero not found or error loading details.
      </div>
    );
  }

  return (
    <div className="max-w-[600px] mx-auto">
      <Card className="overflow-hidden">
        <div className="h-64 overflow-hidden relative">
          <img
            src={hero.imageUrl}
            alt={hero.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 from-background/80 to-transparent" />
          <Badge
            className="absolute top-4 right-4"
            variant={hero.company === "MARVEL" ? "destructive" : "default"}
          >
            {hero.company}
          </Badge>
        </div>

        <CardHeader>
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">{hero.name}</h1>
            <p className="text-lg text-muted-foreground">{hero.secretName}</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              <span>First Appearance: {hero.appearanceYear}</span>
            </div>
            <div className="flex items-center">
              <Sword className="h-4 w-4 mr-1" />
              <span>Equipment: {hero.equipment}</span>
            </div>
          </div>

          <div className="prose dark:prose-invert">
            <h2 className="text-xl font-semibold mb-2">Biography</h2>
            <p className="leading-relaxed">{hero.biography}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
