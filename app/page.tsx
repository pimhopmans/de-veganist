"use client";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/lib/mock/recipes";
import { scrollTo } from "@/lib/window/scroll";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const sortedRecipes = filteredRecipes.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredRecipes(recipes);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = sortedRecipes.filter((recipe) => {
        const inTitle = recipe.title.toLowerCase().includes(lowerCaseQuery);
        const inIngredients = recipe.ingredients
          ? recipe.ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(lowerCaseQuery)
            )
          : false;
        return inTitle || inIngredients;
      });
      setFilteredRecipes(filtered);
    }
  }, [searchQuery]);

  return (
    <div>
      <section
        className="relative flex flex-col min-h-[60vh] justify-center"
        style={{
          backgroundImage: "url('/images/hero-1.jpg')",
          objectFit: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-5xl px-6 space-y-6">
          <h1 className="max-w-2xl text-3xl font-semibold text-white md:text-4xl">
            Een verzameling van vegan recepten — eenvoudig, overzichtelijk en
            lekker.
          </h1>

          <button
            onClick={() => scrollTo("recepten")}
            className="inline-block rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-900"
          >
            Bekijk recepten
          </button>
        </div>
      </section>

      <section id="recepten" className="mt-10">
        {/* Search bar */}
        <div className="w-full min-w-[200px] mb-4">
          <div className="relative">
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              value={searchQuery}
              placeholder="Zoek op recept of ingrediënten..."
              onChange={(e) => updateSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Recipe list */}
        {sortedRecipes.map((recipe) => (
          <div key={recipe.id} className="mb-4">
            <RecipeCard key={recipe.id} recipe={recipe} />
          </div>
        ))}
      </section>

      <footer>
        <div className="mt-20 mb-5 text-center text-sm text-stone-500">
          &copy; {new Date().getFullYear()} De Veganist. Alle rechten
          voorbehouden. Made by Pim Hopmans.
        </div>
      </footer>
    </div>
  );
}
