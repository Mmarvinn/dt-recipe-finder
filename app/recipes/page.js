import Image from 'next/image';
import { Suspense } from 'react';

async function getRecipes(searchParams) {
  const API_KEY = process.env.SPOONACULAR_API_KEY;

  const resolvedSearchParams = await searchParams;

  const params = new URLSearchParams({
    apiKey: API_KEY,
    ...resolvedSearchParams,
  });

  const response = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${params}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  return response.json();
}

export default async function RecipesPage({ searchParams }) {
  const recipes = await getRecipes(searchParams);

  return (
    <section className="flex-grow min-h-[calc(100vh-240px)] py-8 px-4">
      {/* 240px = header + footer height */}
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Recipe Results</h1>

        <Suspense fallback={<div className="text-center">Loading...</div>}>
          {recipes.results.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Sorry, no recipes found matching your search criteria.
              </p>
              <p className="text-gray-500 mt-2">
                Try adjusting your search parameters and try again.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.results.map((recipe) => (
                <div
                  key={recipe.id}
                  className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    width={300}
                    height={300}
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">
                      {recipe.title}
                    </h2>
                    <a
                      href={`/recipes/${recipe.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View Details →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Suspense>
      </div>
    </section>
  );
}
