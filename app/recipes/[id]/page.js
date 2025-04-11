import Image from 'next/image';
import { Suspense } from 'react';

async function getRecipeDetails(id) {
  const API_KEY = process.env.SPOONACULAR_API_KEY;

  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch recipe details');
  }

  return response.json();
}

export default async function RecipeDetails({ params }) {
  const { id } = await params;
  const recipe = await getRecipeDetails(id);

  return (
    <main className='container mx-auto p-8'>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold mb-6'>{recipe.title}</h1>

          <div className='mb-6'>
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={500}
              height={500}
              className='w-full object-cover rounded-xl'
            />
          </div>

          <div
            className='my-6'
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          ></div>

          <div className='mb-8'>
            <h2 className='text-xl font-semibold mb-4'>Ingredients:</h2>
            <ul className='list-disc pl-5 space-y-2'>
              {recipe.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>

          <div className='grid grid-cols-2 gap-4 mb-8'>
            <div className='p-4 bg-gray-50 rounded-lg'>
              <p className='text-sm text-gray-600'>Preparation Time</p>
              <p className='text-lg font-medium'>
                {recipe.readyInMinutes} minutes
              </p>
            </div>
            <div className='p-4 bg-gray-50 rounded-lg'>
              <p className='text-sm text-gray-600'>Servings</p>
              <p className='text-lg font-medium'>{recipe.servings}</p>
            </div>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
