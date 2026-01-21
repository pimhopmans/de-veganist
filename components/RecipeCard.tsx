import Link from "next/link";
import { Recipe } from "@/types/recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link className="" href={`/recepten/${recipe.id}`}>
      <div className="p-2 pl-4 hover:border-l-5">
        <h2 className="text-xl font-semibold">{recipe.title}</h2>
        <p className="text-sm text-stone-600">{recipe.description}</p>
      </div>
    </Link>
  );
}
