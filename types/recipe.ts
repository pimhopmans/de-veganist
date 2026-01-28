export type Recipe = {
  id: string;
  title: string;
  description?: string;
  image?: string;
  servings?: number;
  prepTime?: number;
  cookTime?: number;
  ingredients?: string[];
  instructions?: string[];
  tips?: string[];
  tags?: string[];
  url?: string;
};
