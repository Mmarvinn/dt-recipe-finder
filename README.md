# Recipe Finder Application

A Next.js application that allows users to search for recipes using filters, view recipe listings, and get detailed recipe information.

## Features

- Search recipes by name
- Filter by cuisine type
- Filter by preparation time
- View detailed recipe information including ingredients and instructions
- Responsive design using Tailwind CSS

## Project Structure

```
dt-recipe-finder/
├── app/
│   ├── recipes/
│   │   ├── [id]/
│   │   │   └── page.js    # Recipe details page
│   │   └── page.js        # Recipe listing page
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page with search
│   └── globals.css        # Global styles
├── public/                # Static assets
└── .env.local            # Environment variables
```

## Getting Started

1. Clone the repository:

```bash
git clone [your-repo-url]
cd dt-recipe-finder
```

2. Install dependencies:

```bash
npm install
```

3. File `.env.local` file already included or you can add your Spoonacular API key:

```
SPOONACULAR_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- Next.js 15
- React 19
- Tailwind CSS
- Spoonacular API

## API Configuration

The application uses the [Spoonacular API](https://spoonacular.com/food-api) for recipe data. You'll need to:

1. Sign up for a free account
2. Get your API key
3. Add it to `.env.local`

or

use the key that is already included
