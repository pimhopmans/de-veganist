import Image from "next/image";
import Link from "next/link";
import { recipes } from "@/lib/mock/recipes";
import { getImagePath } from "@/lib/image";

export async function generateStaticParams() {
  return recipes.map((recipe: { id: string }) => ({
    id: recipe.id,
  }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="max-w-3xl mx-auto py-16 text-center">
        <h1 className="text-2xl font-semibold">Recept niet gevonden</h1>
        <p className="text-muted-foreground mt-2">
          Het recept dat je zoekt bestaat niet (meer).
        </p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 space-y-10">
      {/* Back button */}
      <Link
        href="/"
        className="flex items-center text-sm font-medium hover:underline"
      >
        ← Terug naar recepten
      </Link>

      {/* Image */}
      {recipe.image && (
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={getImagePath(recipe.image)}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{recipe.title}</h1>

        {recipe.description && (
          <p className="text-lg text-muted-foreground max-w-2xl">
            {recipe.description}
          </p>
        )}

        {/* Meta info */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {recipe.servings && <span>🍽 {recipe.servings} porties</span>}
          {recipe.prepTime && (
            <span>⏱ Voorbereiding: {recipe.prepTime} min</span>
          )}
          {recipe.cookTime && <span>🔥 Bereiding: {recipe.cookTime} min</span>}
        </div>
      </header>

      {/* Content */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Ingredients */}
        {recipe.ingredients && recipe.ingredients.length > 0 && (
          <aside className="md:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Ingrediënten</h2>
            <ul className="space-y-2 text-sm">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex gap-2">
                  <span>•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Instructions */}
        {recipe.instructions && recipe.instructions.length > 0 && (
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Bereidingswijze</h2>
            <ol className="space-y-4 list-decimal list-inside text-sm">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Original recipe */}
        <section>
          <div className="mt-4">
            <a
              href={recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-lg text-sm font-medium transition-colors hover:underline"
            >
              Bekijk het originele recept
            </a>
          </div>
        </section>

        {/* Tips */}
        {recipe.tips && recipe.tips.length > 0 && (
          <section className="rounded-2xl md:col-span-2">
            <h2 className="text-lg font-semibold mb-3">Tips</h2>
            <ul className="space-y-2 text-sm">
              {recipe.tips.map((tip, index) => (
                <li key={index}>💡 {tip}</li>
              ))}
            </ul>
          </section>
        )}
      </section>

      <footer>
        <div className="mt-20 mb-5 text-center text-sm text-stone-500">
          &copy; {new Date().getFullYear()} De Veganist. Alle rechten
          voorbehouden.
        </div>
      </footer>
    </article>
  );
}
