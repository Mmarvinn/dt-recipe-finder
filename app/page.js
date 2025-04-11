'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxTime, setMaxTime] = useState('');

  const isFormValid = query || cuisine || maxTime;

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxTime) params.append('maxReadyTime', maxTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <section className="min-h-[calc(100vh-240px)] p-8 flex flex-col items-center justify-center">
      {/* 240px = header + footer height */}
      <h1 className="text-4xl font-bold mb-8">Recipe Finder</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label htmlFor="query" className="block text-sm font-medium mb-1">
            Search Recipe
          </label>
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter recipe name (e.g., pasta)"
          />
        </div>

        <div>
          <label htmlFor="cuisine" className="block text-sm font-medium mb-1">
            Cuisine Type
          </label>
          <select
            id="cuisine"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select cuisine</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="chinese">Chinese</option>
            <option value="indian">Indian</option>
          </select>
        </div>

        <div>
          <label htmlFor="maxTime" className="block text-sm font-medium mb-1">
            Maximum Preparation Time (minutes)
          </label>
          <input
            type="number"
            id="maxTime"
            value={maxTime}
            onChange={(e) => setMaxTime(e.target.value)}
            className="w-full p-2 border rounded-md"
            min="1"
            placeholder="Enter maximum cooking time"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          className="w-full bg-blue-500 text-white p-2 rounded-md
            disabled:bg-gray-300 disabled:cursor-not-allowed
            hover:bg-blue-600 transition-colors
            hover:cursor-pointer
            active:scale-98"
        >
          Next
        </button>
      </form>
    </section>
  );
}
